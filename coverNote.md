This Information page was used creating a variety of tools, from Luxon, to Tailwind and Tailwind components.

Design: 
- Initial Layout was designed in Figma as a starting point.
- As it was based on a pre-existing company, I looked at their theme and decided that the black and white aesthetic matches their image. Additionally, given the page was to display information, the layout uses flex-box to create a seamless design that is also responsive to any viewport.  


Development: 
- Axios was used to call the data from the API provided; paired with an asynchronous function to load the data without disturbing the loading time of the page. 
- Reading throught the data using Postman, I noticed a few had either null or undefined on the desired data within the objects. I therefore created an if statement in order to ignore the objects that had either of these statuses. This was done to allow the page to be visually pleasing, as the lack of images or text would disrupt the flow of the layout.
- Using a Tailwind component, I added the accordion dropdown as I believed this would make the layout seem sleeker while also contain the rest of the data. 
-  The boolean on the success data was changed to a string in order for it to be readable to the users. 
-  Luxon was also used to make the Launch date readable to users

Despite being happy with the end product, I think more time working with Tailwind would have been able to give me the cnfidence to work with different components, such as with modals, this is what I hope to further explore in future.