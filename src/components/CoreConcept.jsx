function CoreConcept({
  description = "I am Amit Raj and I am learning the JavaScript library ReactJS.",
  image: photo,
  title: topic,
}) {
  return (
    <li>
      <img src={photo} alt={topic} />
      <h3>{topic}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
