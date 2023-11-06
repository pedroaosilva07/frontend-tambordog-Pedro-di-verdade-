import React from "react";
import { theme } from "../layout/Theme";
import { green } from "@mui/material/colors";
import { Box, Button, CircularProgress } from "@mui/material";

interface propsBotaoComLoading {
    label: string
}

export default function BotaoComLoading({label}: propsBotaoComLoading) {

    const Theme = theme

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<number>();

    const buttonSx = {
        bgcolor: theme.corBotao,
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[500],
            }
        })
    }

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (

        <Box sx={{ m: 1, position: 'relative' }}>
            <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
                fullWidth
            >
                {label}
            </Button>
            {loading && (
                <CircularProgress
                    size={24}
                    sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </Box>
    )
}