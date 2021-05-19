import { useState } from 'react'
import useRequest from '../hook/useRequest'

export default function Table() {

    let [data, options, setOptions] = useRequest()

    console.log(`data ====>>>>`, data);

    let { list, pageCount } = data;

    let [size, setSize] = useState(10)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

            <div>
                {/* 页数 */}
                <nav style={{ float: 'left' }}>
                    <ul className="pagination">
                        {/* pageCount -- 7 */}
                        {
                            new Array(pageCount).fill(0).map((item, index) => {
                                return (
                                    <li
                                        onClick={() => { setOptions({ ...options, currentPage: index + 1 }) }}
                                        key={index}
                                        className="page-item">
                                        <button className="page-link" href="#">{index + 1}</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>

                <div style={{ float: 'left', marginLeft: '20px' }}>
                    {/* 条数 */}
                    <select
                        value={size}
                        onChange={(e) => { setSize(e.target.value); setOptions({ currentPage: 1, pageSize: e.target.value }) }}
                        className="form-select"
                        aria-label="Default select example">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>


            </div>

        </div>

    )
}