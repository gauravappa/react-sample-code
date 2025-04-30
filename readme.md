npm is a package manager for javascript project.
we can initialize node project by using npm init and then follow along the process to build node project
we can install new package by using npm install ( here we can give --dev-save for download as dev dependency and save in package.json, --save for download as all scope dependency and save in package.json , -g for download for global use)

ex. npm install parcel --dev-save
npm install -g react 
npm install -g react-dom
parcel is a bundler
bundler helps us with many things like caching between builds for faster builds,
provide us with compiler that will transpile our code to valid js.
it can give us different bundle that is supported by different brower and versions
it can give us different dev and production build
in production build it removes comments and removes white spaces to reduce memory of files so that
our code loads faster in web

babel is javascript compiler that compiles our React code to web understandable javascripts (ES6 standards).
it transpile all the js and jsx files ES6 standards.it is pulled by parcel.

browserslist is the array we have to mention in package.json to specify user coverage so that parcel will bundle different version of code for different users(which are using different brower with different versions)

jsx is xml extension of js. we can write html like syntax in jsx which is transpiles to react code by babel
jsx is not exactly html like syntax as we have to use camel case to define attributes 

in package.json we hava json which is the configuration for our project (scripts,dependencies).
here we can define caret ^ and tilde ~ for dependencies. versions are like major.minor.patch ~ only update patch versions ^ will update patch as well as minor versions patch is bug fixes while minor update is backward compatible with existing code old functionality is deprecated but usable. while major update will have major changes.hence package.json will not contain extact version used by application.

package-lock.json will contain exact version used by application.

React introduces components which is smallest independent unit of code
there are two ways to create component
1. functional component
2. class based component (old way)

functional component are just simple javascript function which returns some jsx code 
name of these function should be in pascal case.


instead of using React.createElement we can directly use jsx to create jsx element in js
const heading = <h1></h1>; 
we can write above in multiple by wrapping in () also we can add attribute just like html but only thing here is the name of attributes is in camel case that is different from snake formats