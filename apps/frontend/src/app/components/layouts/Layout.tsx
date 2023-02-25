import { Stack } from '@mui/material';
import AppLayout from './AppLayout';

interface layoutProps {
  layout: string;
  children: JSX.Element;
}
export const Layout = ({ layout, children }: layoutProps) => {
  if (!layout) return <Stack sx={{ height: '100%' }}>{children}</Stack>;
  if (layout === 'app') {
    return <AppLayout>{children}</AppLayout>;
  }
  return <div>Layout</div>;
};
