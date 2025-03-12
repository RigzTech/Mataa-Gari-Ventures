// Import images from assets
import headlight from "../assets/images/headlight.png";
import halogenHeadlamp from "../assets/images/halogen-headlamp.jpg";
import ledTaillight from "../assets/images/led-taillight.jpeg";
import halogenTaillight from "../assets/images/halogen-taillight.jpg";
import manualSideMirror from "../assets/images/manual-side-mirror.jpg";
import automaticSideMirror from "../assets/images/automatic-side-mirror.jpg";
import frontBumper from "../assets/images/front-bumper.jpg";
import rearBumper from "../assets/images/rear-bumper.jpg";

const products = [
  {
    id: 1,
    name: "LED Headlamp",
    price: 5000,
    category: "Headlights",
    image: headlight,
    description: "High-quality LED headlamp for clear night vision and safety."
  },
  {
    id: 2,
    name: "Halogen Headlamp",
    price: 3500,
    category: "Headlights",
    image: halogenHeadlamp,
    description: "Durable halogen headlamp with enhanced brightness."
  },
  {
    id: 3,
    name: "LED Taillight",
    price: 4000,
    category: "Taillights",
    image: ledTaillight,
    description: "Energy-efficient LED taillight for improved visibility."
  },
  {
    id: 4,
    name: "Halogen Taillight",
    price: 3000,
    category: "Taillights",
    image: halogenTaillight,
    description: "Standard halogen taillight with strong durability."
  },
  {
    id: 5,
    name: "Manual Side Mirror",
    price: 2000,
    category: "Mirrors",
    image: manualSideMirror,
    description: "Adjustable manual side mirror with clear reflection."
  },
  {
    id: 6,
    name: "Automatic Side Mirror",
    price: 4500,
    category: "Mirrors",
    image: automaticSideMirror,
    description: "Smart automatic side mirror with heating function."
  },
  {
    id: 7,
    name: "Front Bumper",
    price: 8000,
    category: "Bumpers",
    image: frontBumper,
    description: "Strong and durable front bumper for impact protection."
  },
  {
    id: 8,
    name: "Rear Bumper",
    price: 7500,
    category: "Bumpers",
    image: rearBumper,
    description: "Heavy-duty rear bumper for enhanced safety."
  },
];

export default products;
