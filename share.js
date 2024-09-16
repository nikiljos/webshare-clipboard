const $contentDiv = document.getElementById("content");
const $statusDiv = document.getElementById("status");

const params = new URLSearchParams(document.location.search);

const sharedText = params.get("text");

window.onload = async () => {
    if (sharedText) {
        $contentDiv.innerText = sharedText;
        const res = await postContent({
            date: new Date().toLocaleString(),
            content: sharedText,
        })
            .then((res) => res.json())
            .then((data) =>
                data?.created ? "Saved to sheet!" : "Something went wrong"
            )
            .catch((e) => {
                console.log(e);
                return e.toString();
            });
        $statusDiv.innerText = res;
    }
};

const postContent = (data) => {
    const apiUrl = localStorage.getItem("apiUrl");
    const apiToken = localStorage.getItem("apiToken");
    if (!(apiUrl && apiToken)) {
        return Promise.reject("Missing API creds");
    }
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify(data),
    });
};
