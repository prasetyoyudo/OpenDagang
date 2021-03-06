import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';


export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Metrics.navBarHeight,
    backgroundColor: '#FFF'
  },
  cardProfile: {
    height: 120,
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
    alignItems: 'center',
  },
  circleBorder: {
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: Colors.grayMedium,
    marginTop: 20,
    borderColor: Colors.blueTheme,
    borderWidth: 1,
  },
  imagePerson: {
    alignItems: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 25,
  },
  flexCrown: {
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(1.33),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(5.33),
  },
})
