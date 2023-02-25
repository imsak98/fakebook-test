import { useMediaQuery, Stack } from '@mui/material';
interface AppLayoutProps {
  children: JSX.Element;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const matches = useMediaQuery('(max-width:900px)');
  return (
    // <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
    <>
            {children}
    </>
    // </Stack>
  );
};

export default AppLayout;
