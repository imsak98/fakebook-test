import { useMediaQuery, Stack } from '@mui/material';
interface AppLayoutProps {
  children: JSX.Element;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const matches = useMediaQuery('(max-width:900px)');
  return (
    <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
      <Stack sx={{ flexGrow: 1, height: '100%' }}>
        <Stack direction={'row'} sx={{ display: 'flex' }}>
          <Stack>
            <div>
              This is navbar
            </div>
          </Stack>
          <Stack
            sx={{
              width: matches ? '100%' : 'calc(100% - 240px)',
              top: 68,
              right: 0,
              position: 'absolute',
              overflowY: 'auto',
            }}
          >
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AppLayout;
