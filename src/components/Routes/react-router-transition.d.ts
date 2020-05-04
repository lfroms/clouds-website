declare module 'react-router-transition' {
  import { RouteProps } from 'react-router-dom';

  interface CoreProps {
    atEnter: React.CSSProperties;
    atLeave: React.CSSProperties;
    atActive: React.CSSProperties;
    didLeave?: (style: React.CSSProperties) => void;
    className?: string;
    wrapperComponent?: keyof HTMLElementTagNameMap;
    mapStyles?: (styles: React.CSSProperties) => React.CSSProperties;
    runOnMount?: boolean;
  }

  interface AnimatedSwitchProps extends CoreProps {
    children: React.ReactNode;
  }

  interface AnimatedRouteProps extends RouteProps, CoreProps {}

  export const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;
  export const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;
  export const RouteTransition: React.ComponentClass<AnimatedSwitchProps>;
}
