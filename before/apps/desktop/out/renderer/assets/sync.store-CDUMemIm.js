import { Y as defineStore, r as ref } from "./vendor-vue-CdCNd1N_.js";
const useSyncStore = defineStore("sync", () => {
  const status = ref("idle");
  const config = ref(null);
  const pendingCount = ref(0);
  const lastSyncAt = ref(null);
  const lastError = ref(null);
  let unsubscribe = null;
  function initListener() {
    if (unsubscribe) return;
    unsubscribe = window.api.sync.onEvent((event) => {
      status.value = event.status;
      if (event.type === "success") {
        lastSyncAt.value = Date.now();
        lastError.value = null;
        refreshPendingCount();
      }
      if (event.type === "error") {
        lastError.value = event.error ?? "同步失败";
      }
    });
    refreshPendingCount();
    loadConfig();
  }
  function destroyListener() {
    unsubscribe?.();
    unsubscribe = null;
  }
  async function loadConfig() {
    config.value = await window.api.sync.getConfig();
    lastSyncAt.value = config.value?.lastSyncAt ?? null;
  }
  async function saveConfig(cfg) {
    await window.api.sync.saveConfig(cfg);
    config.value = cfg;
  }
  async function triggerManual() {
    await window.api.sync.triggerManual();
  }
  async function refreshPendingCount() {
    const { count } = await window.api.sync.pendingCount();
    pendingCount.value = count;
  }
  async function disableSync() {
    await window.api.sync.disable();
    if (config.value) config.value.enabled = false;
  }
  return {
    status,
    config,
    pendingCount,
    lastSyncAt,
    lastError,
    initListener,
    destroyListener,
    loadConfig,
    saveConfig,
    triggerManual,
    refreshPendingCount,
    disableSync
  };
});
export {
  useSyncStore as u
};
