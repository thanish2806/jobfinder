
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ResumeLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <Navbar />
            <Box style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <Paper 
                    elevation={3} 
                    style={{ 
                        margin: "10px 0", 
                        height: "auto", 
                        width: "90%", 
                        maxWidth: "1000px", 
                        padding: "30px", 
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)"
                    }}
                >
                    <Outlet />
                </Paper>
            </Box>
            <Footer />
        </div>
    );
}



