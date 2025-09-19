-- Create potentialUsers table
CREATE TABLE IF NOT EXISTS public.potentialUsers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    source VARCHAR(50) DEFAULT 'landing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for email lookup
CREATE INDEX IF NOT EXISTS idx_potential_users_email ON public.potentialUsers(email);
CREATE INDEX IF NOT EXISTS idx_potential_users_created_at ON public.potentialUsers(created_at);

-- Enable Row Level Security
ALTER TABLE public.potentialUsers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert
CREATE POLICY "Enable insert for all users" ON public.potentialUsers
    FOR INSERT WITH CHECK (true);

-- Only authenticated users can view the data
CREATE POLICY "Enable read for authenticated users only" ON public.potentialUsers
    FOR SELECT USING (auth.role() = 'authenticated');