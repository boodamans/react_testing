import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card"
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it("matches the snapshot", function() {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
  
  // Expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  
  // Move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  
  // Expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  
  // Move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  
  // Expect the first image to show again, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('hides the left arrow when currCardIdx is 0', () => {
  const { container } = render(
    <Carousel
      photos={[TEST_IMAGES]}
      title="images for testing"
    />
  );

  // Verify the left arrow is hidden when currCardIdx is 0
  const leftArrow = container.querySelector('bi-arrow-left-circle');
  expect(leftArrow).not.toBeInTheDocument();
});

it('hides the right arrow when currCardIdx is 2', () => {
  const { container } = render(
    <Carousel
      photos={[TEST_IMAGES]}
      title="images for testing"
      currCardIdx={2} // Set the initial currCardIdx to 2
    />
  );

  // Verify the right arrow is hidden when currCardIdx is 2
  const rightArrow = container.querySelector('bi-arrow-right-circle');
  expect(rightArrow).not.toBeInTheDocument();
});


// CARD TESTS

it("renders without crashing", function() {
  render(
    <Card
      caption="Sample Caption"
      src="sample-image.jpg"
      currNum={1}
      totalNum={3}
    />
  );
});

it("matches the snapshot", function() {
  const { asFragment } = render(
    <Card
      caption="Sample Caption"
      src="sample-image.jpg"
      currNum={1}
      totalNum={3}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});