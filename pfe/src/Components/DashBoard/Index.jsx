import React from "react";
import './style.css';

const Index = () => {
    return (
           
            <>
                <div className="card--container">
                    <h3 className="main--title">Today's data</h3>
                    <div className="card--wrapper">
                        <div className="payment--card light-red">
                            <div className="card--header">
                                <div className="amount">
                                    <span className="title">Payment amount</span>
                                    <span className="amount--value">$500.00</span>
                                </div>
                                <i className="fas fa-dollar-sign icon"></i>
                            </div>
                            <span className="card-detail">**** **** **** 3484</span>
                        </div>
                        <div className="payment--card light-red">
                            <div className="card--header">
                                <div className="amount">
                                    <span className="title">Payment amount</span>
                                    <span className="amount--value">$500.00</span>
                                </div>
                                <i className="fas fa-dollar-sign icon"></i>
                            </div>
                            <span className="card-detail">**** **** **** 3484</span>
                        </div>
                        <div className="payment--card light-red">
                            <div className="card--header">
                                <div className="amount">
                                    <span className="title">Payment amount</span>
                                    <span className="amount--value">$500.00</span>
                                </div>
                                <i className="fas fa-dollar-sign icon"></i>
                            </div>
                            <span className="card-detail">**** **** **** 3484</span>
                        </div>
                        <div className="payment--card light-red">
                            <div className="card--header">
                                <div className="amount">
                                    <span className="title">Payment amount</span>
                                    <span className="amount--value">$500.00</span>
                                </div>
                                <i className="fas fa-dollar-sign icon"></i>
                            </div>
                            <span className="card-detail">**** **** **** 3484</span>
                        </div>
                    </div>

                </div>


                <div className="tabular--wrapper">
                    <h3 className="main--title">Finance data</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Transaction Type</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-05-01</td>
                                    <td>Expenses</td>
                                    <td>Office Supplies</td>
                                    <td>$250</td>
                                    <td>Office Expenses</td>
                                    <td>Pending</td>
                                    <td><button>Edit</button></td>
                                </tr>
                                <tr>
                                    <td>2023-05-01</td>
                                    <td>Expenses</td>
                                    <td>Office Supplies</td>
                                    <td>$250</td>
                                    <td>Office Expenses</td>
                                    <td>Pending</td>
                                    <td><button>Edit</button></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="7">Total: $1,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </>
    );
};

export default Index;
