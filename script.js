const analyzeBtn = document.getElementById("analyzeBtn");
const usecaseInput = document.getElementById("usecase");
const loadingDiv = document.getElementById("loading");
const resultSection = document.getElementById("result");
const responseDiv = document.getElementById("response");

analyzeBtn.addEventListener("click", async () => {
  const usecase = usecaseInput.value.trim();

  if (!usecase) {
    alert("Please describe your situation.");
    return;
  }

  // UI state
  loadingDiv.classList.remove("hidden");
  resultSection.classList.add("hidden");
  responseDiv.innerHTML = "";

  try {
    const res = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usecase }),
    });

    if (!res.ok) {
      throw new Error("Backend request failed");
    }

    const data = await res.json();

    loadingDiv.classList.add("hidden");
    resultSection.classList.remove("hidden");

    responseDiv.innerHTML = formatResponse(data.result);
  } catch (err) {
    loadingDiv.classList.add("hidden");
    alert("Failed to get AI response. Check backend.");
    console.error(err);
  }
});

function formatResponse(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}
