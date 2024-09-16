const $storeBtn = document.getElementById("storeTrigger");

$storeBtn.onclick = () => {
    const apiUrl = prompt("Enter URL [Enter `clear` to reset]", localStorage.getItem("apiUrl") || "");
    if (!apiUrl) {
        alert("Invalid URL");
        return;
    }
    else if(apiUrl=="clear"){
        localStorage.removeItem("apiUrl")
        localStorage.removeItem("apiToken")
        alert("URL and Token Cleared!");
        return;
    }
    const apiToken = prompt(
        "Enter Token",
        localStorage.getItem("apiToken") || ""
    );

    if (apiUrl && apiToken) {
        localStorage.setItem("apiUrl", apiUrl);
        localStorage.setItem("apiToken", apiToken);
    }
};
