import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native';

interface CustomModalProps {
  visible: boolean;
  children: any;
  containerStyle: StyleProp<ViewStyle>;
  modalStyle: StyleProp<ViewStyle>;
  onBacksidePress: any;
}

const CustomModal = (props: CustomModalProps) => {
  const {visible, children, containerStyle, modalStyle} = props;
  if (!visible) return null;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.modal, modalStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    justifyContent: 'center',
  },
});

export default CustomModal;
