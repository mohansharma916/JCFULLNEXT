const ContentDetails = ({ data }) => {
  return (
    <>
      <div className="my-8">
        {/* <p>Itineary</p> */}
        {data.map((item, index) => {
          if (item.type === "heading") {
            return (
              <h2 className="font-bold my-4" key={index}>
                {item.content}
              </h2>
            );
          } else if (item.type === "paragraph") {
            return (
              <p className="mt-4" key={index}>
                {item.content}
              </p>
            );
          } else if (item.type === "list") {
            return (
              <ul key={index}>
                {item.content.map((listItem, i) => (
                  <li className="my-2" key={i}>
                    {" "}
                    #️⃣ {listItem}
                  </li>
                ))}
              </ul>
            );
          } else {
            return null; // Handle other content types as needed
          }
        })}
      </div>
    </>
  );
};

export default ContentDetails;
