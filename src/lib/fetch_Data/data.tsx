export async function Get_data() {
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "GET",
        headers: { "Content-Type": "application/jason" },
        next: { revalidate: 0 },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const result = await res.json();
  
      return result;
    } catch (error) {
      console.log((error as { message: string }).message);
    }
  }
  