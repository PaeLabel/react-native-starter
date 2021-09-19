# Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

# Getting Started

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process
2. Software dependencies
3. Latest releases
4. API references

# Code generate

We have code template for generate a common file that using in the project, It can be reduce time and increase productivity for development.
The first one you should install hygen as global with command `npm i -g hygen`

### Available generate actions:

- dto: new
  - `hygen dto new AUTH`
- actionType: help, new
  - `hygen actionType new MY_ACTION_TYPE`
- reducer: help, new
  - `hygen reducer new MyReducerName --actionType MY_ACTION_TYPE`
- action: add, new
  - new action file: `hygen action new MyAction`
- component: class, function, help
  - generate class component: `hygen component class MyComponentName --into MyFolderName`
  - generate function component: `hygen component function MyComponentName --into MyFolderName`
- screen: help, new
  - `hygen screen new MyScreenName`
- service: add, new
  - new service file: `hygen service new MyName`
  - add method to service: `hygen service add methodServiceName --into MyNameService`

### Generate redux flow (should follow this sequence)

1. dto
2. actionType
3. reducer
4. service
5. action

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
