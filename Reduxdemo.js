import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
 
export default function ReduxStore(){
   
    const reducer=function(state,action){
        switch(action.type)
        {
            case 'ATTACK' :{
                return action.payload;
            }
            case 'GREENATTACK' :{
                return action.payload;
            }
            default : return state;
        }
    };
    const store=createStore(reducer,"peace");
    
    
    store.subscribe(()=>
        {console.log('Store value is now',store.getState());}
    );

    store.dispatch({type:'ATTACK',payload:'Iron MAn'});
    store.dispatch({type:'GREENATTACK',payload:'hulk'});



    return(
        <View>
          <Text>text</Text>  
        </View>
    )
}