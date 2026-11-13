import { supabase } from '../config/supabase';
import { Client } from '../interfaces/Client';

const TABLE = 'clients';

export const ClientsService = {
  async getAll(): Promise<Client[]> {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw error;
    return data as Client[];
  },
};
