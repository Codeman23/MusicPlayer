import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      active: "active",
    },
    {
      name: "Soulsounds",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      color: ["#fa9a9c", "#007483"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      active: false,
    },
    {
      name: "la zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      id: uuidv4(),
      color: ["#5f90b4", "#adcbd9"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8607",
      active: false,
    },
  ];
}

export default chillHop;
