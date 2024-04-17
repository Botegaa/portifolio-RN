import { createStackNavigator } from "@react-navigation/stack";
import {  Home } from "../screen/home/Home";
import {   Gallery } from "../screen/gallery/Gallery";


const { Screen, Navigator } = createStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    title:' Main Menu',
                    headerShown: false
                    
                }}
            />
            <Screen
                name="skills"
                component={Gallery}
                options={{
                   
                    headerShown: false
                    
                }}
                
            />
        </Navigator>
    )
}