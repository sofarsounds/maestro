import { withInfo } from '@storybook/addon-info';

export default (
  text: string,
  showSource?: boolean,
  propTablesExclude?: React.ComponentType[]
) => {
  // @ts-ignore
  return withInfo({
    inline: true,
    source: false,
    // styles: wInfoStyle,
    text,
    header: true
    // propTablesExclude: [
    //   Box,
    //   GridDisplay,
    //   Layout,
    //   LayoutContainer,
    //   Media,
    //   ResponsiveContainer,
    //   Section,
    //   styled,
    //   SubSection,
    //   ThemeProvider,
    //   H4,
    // ].concat(propTablesExclude),
  });
};
