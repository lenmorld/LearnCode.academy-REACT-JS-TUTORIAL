npm install -S react-router
npm install -S history

# for react-router v4 onwards
 npm install -S react-router-dom


client.js

 ReactDOM.render(
   <BrowserRouter>
     <Route path="/" component={Layout}>
       <IndexRoute component={Featured}></IndexRoute>
         <Route path="archives" component="{Archives}"></Route>     -> load Archives component as a child component of Layout
                                                                    -> will send this.props.children to Layout
         <Route path="settings" component="{Settings}"></Route>
     </Route>
   </BrowserRouter>,
 app);



Layout.js

<div class="well well-lg">
    <h1>Killer News.net</h1>
    {this.props.children}                       <------- load the content of linked component, put this whenever we want content to appear
    <Link to="archives">Archives</Link>
</div>


--> react-router-v4

In react-router-v4 you don't nest <Routes />. Instead, you put them inside another <Component />.
https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4


-> right way
https://reacttraining.com/react-router/web/example/basic


pushState vs replaceState

this.props.history.pushState(null, "/");  

*whenever you pushState, you get the back button

*replaceState
