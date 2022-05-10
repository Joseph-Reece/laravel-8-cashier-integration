import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head, Link, usePage } from '@inertiajs/inertia-react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id, title, identifier, stripe_id) {
    return { id, title, identifier, stripe_id };
  }
  
  

  /* 'title' => 'Basic Plan',
                'identifier' => 'basic',
                'stripe_id' => 'price_1KxVA5CDh8HdIZ5wXZicQXHl',
                'created_at' => now(),
                'updated_at' => now(), */
const Plans = (props) => {
    const { plans } = usePage().props;

    const rows = plans.map((plan) => {
        return createData(plan.id, plan.title, plan.identifier, plan.stripe_id);
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Plans</h2>}
        >
            <Head title="Plans" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                        <TableCell align="right">Stripe_id</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Link href={route("payments", row.id)} > {row.title} </Link>                                                
                                            </TableCell>
                                            <TableCell align="right">{row.identifier}</TableCell>
                                            <TableCell align="right">{row.stripe_id}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Plans
