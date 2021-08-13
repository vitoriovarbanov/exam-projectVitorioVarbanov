# exam-projectVitorioVarbanov
 Angular project for my exam at SoftUni August 2021
 
  This is an e-commerce shop that is focused on offering and providing products related to a healthy lifestyle.
There are different categories that you can select from, as well as top products presented on the Home page.
The user is able to add and remove items from his cart, see the current bill and more. The routes that are related to the user's cart and added items are protected with Route Guards. This separates the logic and divides the project into to two parts - public without authentication and private - user must be logged in.
 
  I have followed the basic principles of Material Design for Angular. The themes, color palletes, fonts and components were selected following the guides of the documentation. The selection emphasizes the unique design that the application offers.
  
  Another useful tool to create different quality backgrounds for each component and modules is - Hiakei https://app.haikei.app/
  
  I'm using Firebase for Backend-as-a-Service. The Authentication is handled with Firabase also, as it's a nice solution to Manage users, signin, login and password recovering. This service also offers a Realtime database and the documentation provides built-in helper methods to handle CRUD operations and edit the DB. Sign-in with Google is also implemented.
  
  The services that require data from the DB(Firestore Database) as Http requests are separeted by modules and using Dependancy Injection I have required them when needed inside the components.
  
  Each user can add items to his cart and  keep them there even if he logs out of the application as they are saved inside the DB. This means that he can access his current cart items even from a different mobile device, laptop or PC at anytime.
  Inside user's profile each user can set additional info and a profile picture with a link from outside source.
 
 Main Angular principles, concepts and services used:
 - Dependency Injection
 - RxJS, Observables, Behavior Subjects
 - Lazy loading
 - HTTP Client
 - Router, Activated Router, Route Guards
 - Pipes
 - Directives
 - Resolvers
 
 
