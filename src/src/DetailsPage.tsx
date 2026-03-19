import { useParams } from "react-router";
import { addPet, findPetsByStatus, type Pet } from "./client";
import { useState } from "react";

const DetailsPage = () => {
  const { code } = useParams<{ code: string }>();
  const [pets, setPets] = useState<Pet[] | undefined>(undefined);

  const text = (() => {
    switch (code) {
      case "1":
        return "You are watching the first code";
      case "2":
        return "This is the second code";
      default:
        return "Unknown code";
    }
  })();

  const createPet = async () => {
    const pet: Pet = {
      id: 123,
      name: "Fluffy",
      status: "available",
      photoUrls: ["https://example.com/fluffy.jpg"],
    };
    try {
      addPet({
        body: pet,
      });
      console.log("Pet created successfully");
    } catch (error) {
      console.error("Error creating pet:", error);
    }
  };

  const findPets = async () => {
    try {
      const response = await findPetsByStatus({
        query: {
          status: ["available"],
        },
      });
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Details for code: {code}</h1>
      <p>{text}</p>
      <button
        onClick={createPet}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Pet
      </button>
      <button
        onClick={findPets}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Find Pets
      </button>
      {pets && (
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>{pet.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailsPage;
