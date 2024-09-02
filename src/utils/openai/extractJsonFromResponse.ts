export function extractJSONFromResponse(response: string) {
  // Strip out the code block markers like ```json and ```
  const jsonString = response.replace(/```json|```/g, '').trim();

  // Try parsing the JSON string
  try {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;  // Return null if parsing fails
  }
}