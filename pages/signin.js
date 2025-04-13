// "use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button, Container, Typography } from "@mui/material";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>Welcome, {session.user.name}</Typography>
        <Typography variant="body1">{session.user.email}</Typography>
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Button>
      </Container>
    );
  } else {
    return (
      <Container sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>Sign in with Google</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn("google")}
        >
          Sign In with Google
        </Button>
      </Container>
    );
  }
};
