import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

export default function OverScreen(props) {
  return (
    <View style={styles.rootContainer}>
        <View style={styles.contentContainer}>
            <Title 
            title={"GAME OVER!"} 
            verticalPadding={8} 
            color={colorPallete.textColor} />

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/gameOver.png')}/> 
            </View>
            <Text style={styles.outerText}>
                Your phone needed 
                <Text style={styles.innerText}> {props.totalRounds} </Text>
                rounds to guess the 
                number
                <Text style={styles.innerText}> {props.result}</Text>
                .
            </Text>
            <CustomButton title={'Start New Game'} onPress={props.restartGame} />
        </View>
        
    </View>
  )
}

const styles =StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:24,
        // borderColor:'red',
        // borderWidth:1
    },
    contentContainer:{
        alignItems:'center',

        // borderColor:'red',
        // borderWidth:1

    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        overflow:'hidden',
        borderColor:colorPallete.two,
        borderWidth:6,
        marginVertical:8,
        elevation:16,
    },
    image:{
        height:'100%',
        width:'100%',

    },
    outerText:{
        fontSize:20,
        textAlign:'center',
        marginVertical:16,
        // width:'50%',
        // paddingHorizontal:8,
        // borderColor:'red',
        // borderWidth:1

    },
    innerText:{
        fontWeight:'bold',
        color:colorPallete.three

    }
})
