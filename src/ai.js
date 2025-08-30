import { HfInference } from "@huggingface/inference";

const hf = new HfInference("YOUR_HUGGING_FACE_TOKEN_HERE"); // Replace with your token

export async function getRecipe(ingredients) {
  try {
    const prompt = `You are a chef assistant. Suggest a recipe using these ingredients: ${ingredients.join(", ")}. Format in markdown.`;

    const response = await hf.textGeneration({
      model: "togethercomputer/ChatGPT-3.5-mini", // or any HF model
      inputs: prompt,
      parameters: { max_new_tokens: 300 }
    });

    return response.generated_text || "Sorry, couldn't generate a recipe this time.";
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Sorry, couldn't generate a recipe this time.";
  }
}
