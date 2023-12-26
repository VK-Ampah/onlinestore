import { screen,render, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from "../components/ui";

 

describe('Home', () => {
  test('renders Home component with figures, images, and captions', async () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Testing if top discount component is rendered
    const topDiscountElement = screen.getByTestId('top-discount');
    expect(topDiscountElement).toBeInTheDocument();


    // Wait for the figures to be present and test if figures are displaying
    await waitFor(async () => {
        const figureElements = screen.queryAllByTestId('figElement');
        expect(figureElements.length).toBeGreaterThan(0);

        // mock product categories
        const uniqueCategories = ["electronics","jewelery","men's clothing","women's clothing"]

         figureElements.forEach(async (figureElement, index) => {
      // Wait for the image to be present
            await waitFor(() => {
                const imageElement = screen.getByAltText(`${uniqueCategories[index]}`);
                expect(imageElement).toBeInTheDocument();
            });
               //   Wait for the figcaption element to be present
            await waitFor(() => {
                const captionElement = screen.getByTestId(`${uniqueCategories[index]}`);
                expect(captionElement).toBeInTheDocument();
                // expect(captionElement.textContent).toBe(uniqueCategories[index].toUpperCase());
            });
    });

    });
  });
});


