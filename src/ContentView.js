import React, {useState, useRef, useEffect} from 'react';
import { SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationView from './NavigationView';
import BottomNavigationBar from './ButtomNavigationBar';
const styles = {
    container:{
        flex:1,
        marginTop:50,
    },
};

const ContentView = () =>{
    const webViewRef = useRef();

    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);
    const [currentUrl,setCurrentUrl] = useState('');

    const handleBackPress = () => {
        webViewRef.current.goBack();
    };

    const handleForwardPress = () => {
        webViewRef.current.goForward();
    };

    useEffect(() => {
        const url = "https://gamma.customer.tableflash.com/home";
        const showAlert = 'window.alert("hello")';
        if(currentUrl === url){
            //webViewRef.current.injectJavaScript(showAlert);
        }
    },[currentUrl])

    return(
        <View style={styles.container}>
            <NavigationView 
                onBackPress={handleBackPress} 
                onForwardPress={handleForwardPress}
                canGoBack={canGoBack}
                canGoForward={canGoForward}
            />
            <WebView 
                ref={webViewRef}
                source={{url: 'https://gamma.customer.tableflash.com/home' }} 
                originWhitelist={['*']}
                onNavigationStateChange={(state) => {
                    const back = state.canGoBack;
                    const forward = state.canGoForward;
                    const currentUrl = state.url;
                    setCanGoBack(back);
                    setCanGoForward(forward);
                    setCurrentUrl(currentUrl);
                }}
            />
            <BottomNavigationBar 
                onBackPress={handleBackPress} 
                onForwardPress={handleForwardPress}
                canGoBack={canGoBack}
                canGoForward={canGoForward}
            />
            
        </View>
    );  
};

export default ContentView;