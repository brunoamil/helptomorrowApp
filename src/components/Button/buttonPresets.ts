import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonPreset} from './Button';

//VARIANT SEM DISABLED/DEFAULT
// interface ButtonUI {
//   container: TouchableOpacityBoxProps;
//   content: ThemeColors;
// }

// export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
//   primary: {
//     container: {
//       backgroundColor: 'primary',
//     },
//     content: 'primaryContrast',
//   },
//   outline: {
//     container: {
//       borderWidth: 1,
//       borderColor: 'primary',
//     },
//     content: 'primary',
//   },
// };

//VARIANT COM DEFAULT E DISABLED

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
