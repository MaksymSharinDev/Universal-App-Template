


## Description
A Multiplatform App Mobile-first & Offline-first 
- Using React Native Web for the web client  
  ( with Platform Specific code )
- Using React Native for mobile client  
  ( and more platforms out of the box )
- Express backend expose REST APIs and  
- Express API servers for abstract 3rd part resources
- Firebase add seamlessly 
    - offline capability  
      ( limited because of "Last In Win conflict" resolution strategy )
    - cross-platform data availability
    - Google & 3rd Part OAuth 2.0 Sign In flows
    - CDN


#Tech Stack

<!--- #TODO: Check at the end ---> 
<!---
<table  >

<tr>
<td><h3>Frontend</h3></td>
<td><h3>Mobile</h3></td>
<td><h3>Backend</h3></td>
</tr>
<tr>
<td style="vertical-align:top" >

- Javascript
    - TypeScript
- Debugging
    - Chrome dev tools
- JS Frameworks
    - React,
        - redux
        - redux-thunk
- SDKs
    - Firebase JS 9 
- User Interface
    - FirebaseUI
    - React Native Paper
    - Semantic UI
    - Bootstrap
    - css3
</td>
<td style="vertical-align:top">

- Javascript
    - TypeScript
- Debugging
    - Android Emulator 
    <div hidden> 
    - Expo-cli
    - Android Emulator
        - Expo Go App
    - Iphone Emulator
        - VMWare OSX image VM
        - XCode
        - Expo Go App
    </div>
- JS Frameworks
    - React-Native
        - User Interface
            - FirebaseUI
            - React Native Paper
        - Offline
            - React Native Firebase

        - Web Components Interoperability
            - webview
              <br>( react-native-webview )
            - webview bridge seamless
</td>
<td style="vertical-align:top">

- Javascript
    - TypeScript
- Debugging
    - Nodemon
- JS Frameworks
    - Node.js
        - Express
            - Mongoose
        - Firebase Admin SDK

</td>

</tr>
<tr>
<td><h3>Infrastructure</h3></td>
<td> <h3>CI / CD</h3></td>
<td><h3>3th part services</h3></td>
</tr>
<tr>
<td style="vertical-align:top">

- Indexing
    - Google Domains
- CDN, anti-ddos , SSL
    - Cloudflare
- Media Hosting
    - Firebase Hosting
- Cloud Server
    - Google App Engine
- Database
    - Firebase
    - Atlas MongoDB

</td>
<td style="vertical-align:top">
<h3>Tools</h3>

- Tool

<h3>Testing</h3>
<table>
<tr>
<td>
Frontend
</td>
<td>
Mobile
</td>
<td>
Backend
</td>
</tr>
<tr>
<td colspan="3" >

- Jest
- Faker

</td>
        </tr>
<tr>
<td></td>
<td></td>
<td>

- supertest
- nock
</td>
</tr>
    </table>
</td>
<td>

- Google
    - Firebase OAuth 2.0 Sign-In
    - Google Calendar
- Nordigen
    - Bank Account Transactions
</td>
</tr>
</table>
-->



### Practices

<table>
<tr>
<td>

<!-- - Test Driven Development -->
- Documentation Driven Development
</td>
</tr>
<tr><td>

- Domain-oriented folder structure
</td></tr>
</table>

# Frontend


# Backend

<div style="padding-left: 50px">

### Notes
 
the refactory have the goal to provide

- Updated Dependencies
- Fitness to my workflow style
- Template Generalization aimed to  
  scaffolding implementation
- Compatibility with Google App Engine ( Managed ) 



### Boilerplate Refactoring Checklist

 - [ ] Move `index.ts` , `Application.ts` And `ExpressServer.ts`  
   from `./service/server` to `./app`
 - [ ] Renaming "Cat" to "Example"
 - [ ] move `./service/server/example` folder  as `./routes/example`
 - [ ] move `./service/server/middlewares` folder as `./middlewares`
 - [ ] every `*.d.ts` file that is not a cross-domains definition  
   must be moved as `./*/domain/types.d.ts`
 - [ ] remove `./middlewares/DatadogStatsdMiddleware.ts` 
   file and so `setupTelemetry()` middleware  
   as App Engine Managed Environment don't support webSockets
 - [ ] Refactor simplifying how Rest API are handled in the boilerplate.
   - [ ] import the router from ./routes/router.ts and 
     `app.use('/api', router )` in `./app/ExpressServer.ts`
   - [ ] in `./routes/router.ts` follow the pattern  
     ```
     router.use( '/v1/example', exampleRoutes )
     ``` 
     imported from `./routes/example/index.ts`
     reason K.I.S.S. rule
   - in `./routes/example/`  
     - `index.ts`
     - `controller/operation.ts`
     - `model.ts`
     - `validation.ts`
     - `types.d.ts`
     - `routes/`
   
 - [ ] strip away  Mocha, Chai, Sinon in favor of Jest 
   - delete `./integration/*Test.ts` , `./**/*Spec.ts` 
   - 
### Requirements

- Node Version Manager (nvm)
- Yarn

### Setup

```bash
git clone <thisrepo>.git folderName
cd folderName
nvm use
nvm install lts/dubnium # only required once
npm install
npm start
```

### Architecture

#### Application Entrypoint :
<div > 
<table style="display: inline; margin: 10px">
<th style="text-align:left">

path:
```./App```
</th>
<tbody>
<tr>
<td>
<table>

<th> file </th>
<th> role </th>
<tbody>
<tr>

<td>  

`Index.ts`
</td>
<td>

Application bootstrapper
</td>
</tr>
<tr>
<td>

`Application.ts`
</td>
<td>

ExpressServer wrapper  \
for CLI execution features

- Graceful app shutdown


</td>
</tr>
<tr>
<td>

`ExpressServer.ts`
</td>
<td>

Manage implementations of \
the main middleware chain

- Standard Middlewares
- Endpoints


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="display: inline; margin: 10px">
<th style="text-align:left">

path:
```./App```
</th>
<tbody>
<tr>
<td>
<table>

<th> file </th>
<th> role </th>
<tbody>
<tr>

<td>  

`Index.ts`
</td>
<td>

Application bootstrapper
</td>
</tr>
<tr>
<td>

`Application.ts`
</td>
<td>

ExpressServer wrapper  \
for CLI execution features

- Graceful app shutdown


</td>
</tr>
<tr>
<td>

`ExpressServer.ts`
</td>
<td>

Manage implementations of \
main middleware chains

- Standard Middlewares
- Endpoints


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
 </div>



#### Settings and Configs :

`./.nvmrc` ---> Node LTS version 


</div>