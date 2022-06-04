import React from 'react'
import { Modal, View, Text, Button, Image, SafeAreaView } from 'react-native'
import Styles from './Styles'

export default function (props) {

    return (
        <Modal
            transparent={true}
            visible={props.Visible}>
            <View style={Styles.modalContainer}>
                <View style={Styles.Modaltop}>
                    <Image source={{ uri: props.Target.image_url }} style={Styles.modalImg} />
                    <View style={Styles.modalDetails}>
                        <Text style={Styles.modalTitle}>{props.Target.title}</Text>
                        <Text style={Styles.modalTitle}>Score</Text>
                        <Text style={Styles.subtitle}>{props.Target.score}</Text>
                        <Text style={Styles.modalTitle}>Episodes</Text>
                        <Text style={Styles.subtitle}>{props.Target.episodes}</Text>
                    </View>
                </View>
                <View style={Styles.modalBottom}>
                <Text style={Styles.modalHeading}>Information</Text>

                    <Text numberOfLines={11}
                        style={Styles.modalText}>{props.Target.synopsis}</Text>
                </View>
                <View>
                    <Button 
                        title="Close"
                        color="#82212e"
                        onPress={() => props.setVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}
