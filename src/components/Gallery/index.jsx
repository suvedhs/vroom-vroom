import React from 'react';



function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      {/* name of category will appear at the top of the div */}
      {/* <h1 data-testid="h1tag">{(currentCategory.name)}</h1> */}
      {/* corresponding component will pop up based off whatever category is picked*/}
      <p>{currentCategory.description}</p>
    </section>
  );
}
export default Gallery;