// function AppoitmentsChart({ data }) {
//     return (
//         <PieChart width={400} height={400} >
//             <Pie
//                 data={data}
//                 cx={120}
//                 cy={200}
//                 innerRadius={60}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 paddingAngle={5}
//                 dataKey="value"
//             >
//                 {
//                     data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))
//                 }
//             </Pie>
//         </PieChart >
//     )
// }

// export default AppoitmentsChart


import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class AppoitmentsChart extends PureComponent {

    render() {
        return (
            <PieChart width={200} height={400}>
                <Pie
                    data={this.props.data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    // label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    
                >
                    {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}
