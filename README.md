# react-native-easy-themes

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

react-native-easy-themes is a library for create styling and reuse it as much as possible in react-native.

### Installation
Install the dependencies and start the server.

```sh
$ yarn add react-native-easy-themes
```

### How to use?
 - First you need to build the theme in the root file.
    ```sh
    import { buildTheme, getStyle } from 'react-native-easy-themes';
    buildTheme();
    ``` 
 - Then you can use it's like this
    ```sh
    export default class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                active: false
            }
        }

        toggle = () => {
            this.setState({
                active: !this.state.active
            })
        }

        render() {
            const { active } = this.state;
            
            return (
                <TouchableOpacity 
                    style={[
                        getStyle('circle-120 bg-red'), 
                        active && getStyle('bg-lightGreen')
                    ]} 
                    onPress={this.toggle} 
                />
            );
        }
    }
    ``` 
### Customize
 - For customization, run:
    ```sh
        $ node node_modules/react-native-easy-themes/eject.js
    ```
 - And you will see themes folder appear in the root of your project, insize it's will have the build and getStyle function, and themes variables.
    ```sh
        const yourCustomOptions = {
            color: {
                lightGreen: '#37C892',
                red: '#f44336',
                grey: '#666666'
            },
            other: {
                roboto: {
                    fontFamili: 'Roboto'
                }
            },
            ...etc
        }
        buildTheme(yourCustomOptions);
    ```

### Todos
 - Write MORE Tests

License
----

MIT

   [git-repo-url]: <https://github.com/namnh240795/react-native-easy-themes.git>