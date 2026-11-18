// Replace this with your public Google Play URL or direct APK URL before publishing.
  const NEXUS_FIT_ANDROID_URL = "";
  const download = document.getElementById("androidDownload");
  if (NEXUS_FIT_ANDROID_URL) {
    download.href = NEXUS_FIT_ANDROID_URL;
    download.addEventListener("click", () => {});
  } else {
    download.addEventListener("click", (event) => {
      event.preventDefault();
      alert("The official Nexus-Fit download link has not been added yet. Please check back soon.");
    });
  }
  document.getElementById("year").textContent = new Date().getFullYear();
