
# Namaste React 
In order to push this code to Production we need to 

1.Minify the code.
2.Split the code.
3.Optimize the code.
4.Bundle our code.
5.Compress the code.
6.Image optimization.
7.Lot of Processing in your Local.
8.Chunking the code.
9.Remove the comments
You need to make a lot of libraries,other packages created by other JS Dev to scale,Fast and Build a production Ready app

NPM: Manage packages and install all packages sequentially.Its standard  bin repository for all the packages.
Yarn:Manage packages and install all packages parallely       

Package.json     : It Configuration file for NPM --It keeps track of version of package
Package-lock.json: It keeps track of exact version 
                   It locks and records exact version of the package/dependency that is installed
                   integrity--between dev and prod
Node_Modules     : It is Database for NPM..Trasitive dependencies are also installed  
                   Collection of dependencies.          
                   Its approx 285MB so it will take up a lot of space.
THE BEST PRACTICE :  Put it in a GitIgnore file,If u dont want to put it on Github       

