# Extend UI Take Home Exercise

This is an exercise that will give you a glimpse of responsibilities of a UI engineer at Extend.

In this challenge, we'd like to re-create the frontend for the protection plan offers modal. Someone will provide the access to the Figma file as core reference, and your task is to build a pixel-perfect, fully-interactive user-interface (UI).

# Acceptance Criteria
- The modal should be built with progressive enhancement principles in mind (mobile-first).
- Pay close attention to the style attributes as hinted by Figma. Our designers will screening for styling accuracy of your submission in relation to the shared previews. 
- Make sure that the solution is readable. A frontend engineer will be screening for readability.

# Instructions

1. Visit the Figma file [here](https://www.figma.com/file/4QLFtykYdncfXgiRIpOjEm/Modal-Offer?node-id=0%3A1
) to access the design mocks
2. Clone this repository on your local drive to locally develop.
2. To bootstrap the repository, run:
```
$ yarn
$ yarn start
``` 
3. Open localhost:6006 on your browser to track your progress. There should be a single UI component labeled as "Offers Modal" to preview the state of your changes.

(Preview of running the CLI to start local development)

https://user-images.githubusercontent.com/13429481/125835080-c4267912-61cb-456a-b608-b8801e1d1fb8.mov

(Preview of what to expect from localhost)
![image](https://user-images.githubusercontent.com/13429481/126203953-55601cfd-dcaf-473d-94e0-369b7af2cfff.png)

4. Update the class names, IDs, and/or identifiers on the JSX file as needed inside `OffersModal.jsx`, and customize your styles inside `offers-modal.css`. Good luck!

# Hints

We want to make sure that the UI matches the mocks as accurately as possible. Storybook offers a few tools that enables us engineers to build seamlessly. Feel free to use the following add-ons for a smooth experience:

The toolbar that's on top of Storybook's canvas:
![image](https://user-images.githubusercontent.com/13429481/126205939-3711247a-97f9-4afa-8e04-88edd4608de6.png)

Contains several utilities for inspecting your element's measurements and calculated gap values. Ones worth exploring are:
**The viewport inspector** to toggle the preview of your elements between small mobile (portrait/landscape modes), large mobile (portrait/landscape modes), and full desktop mode.

https://user-images.githubusercontent.com/13429481/126206302-4187890f-730b-4417-9282-8fa788511fed.mov

**The element inspector** to inspect the paddings/margin/sizes of the HTML Element that's in-focus/on-hover.

![image](https://user-images.githubusercontent.com/13429481/126206627-a50e38da-2a37-48b8-bc26-a3bdf37e67ae.png)



# Questions / Feedback

If you run into any bugs and/or issues with setting up your local environment, or have a question regarding the acceptance criteria, reach out to the hiring manager.

Good luck!
