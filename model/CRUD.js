const mysql = require("mysql");
const db_config = {
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'hoakhanh',
    port: '3306'
};
var connection;

function handleDisconnect() {
    connection = mysql.createConnection(db_config)
        //Connect to MySQL
    connection.connect((err) => {
        if (err) {
            console.log(err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    connection.on('error', (err) => {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect(); // lost due to either server restart, or a
        } else { // connnection idle timeout (the wait_timeout
            throw err; // server variable configures this)
        }
    });
}

handleDisconnect();

const SelectALL = function(para1, callback) {
    let query = 'SELECT * from ??;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);
        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);
            } else {
                callback(undefined, data);
            }
        }
    })
}

/*
    TABLE taikhoan
    Select by id,tentk
    Update
    Insert
 */
var SelectByUserNameFromTK = (para1, callback) => {
    var query = 'SELECT * from taikhoan Where tentk=?;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);

        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);

            } else {
                callback(undefined, data);

            }
        }
    })
};
var SelectByIDFromTK = (para1, callback) => {
    var query = 'SELECT * from taikhoan Where id=?;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);

        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);

            } else {
                callback(undefined, data);

            }
        }
    })
};
var UpdateTK = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update taikhoan SET tentk=?,emailtk=?,vitritk=?,note=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");

                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");
                }
            }
        })
    })
};
var InsertTK = function(para) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO taikhoan SET ?;";
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                resolve(data);

            }
        })
    })
};
var DeleteTK = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'DELETE FROM taikhoan WHERE id=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.affectedRows == 1) {
                    resolve(data);

                }
            }
        })
    })
};
/*
    TABLE khachhang
    Select By id
    Update
    Insert
    Delect by id
 */
var SelectByIDFromKH = (para1, callback) => {
    var query = 'SELECT * from khachhang Where id=?;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);

        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);

            } else {
                callback(undefined, data);

            }
        }
    })
};

var UpdateKH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update khachhang SET tenKH=?,masothue=?,diachi=?,email=?,sdt=?,sofax=?,note=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");

                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");

                }
            }
        })
    })
};
var InsertKH = function(para) {
    return new Promise((resolve, reject) => {
        var query = "INSERT iNTO khachhang SET ?;";
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                resolve(data);

            }
        })
    })
};
var DeleteKH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'DELETE FROM khachhang WHERE id=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.affectedRows == 1) {
                    resolve(data);

                }
            }
        })
    })
};
/*
    Type Datetime fomat YYYY-MM-DD
    TABLE taixe
    Select By id
    Update para = [value1,value2,...,id]
    Insert para = json {};
 */
var SelectByIDFromTX = (para1, callback) => {
    var query = 'SELECT * from taixe Where id=?;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);

        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);

            } else {
                callback(undefined, data);

            }
        }
    })
};
var UpdateTX = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update taixe SET tenTX=?,ngaysinh=?,cmnd=?,ngaycap=?,banglai=?,ngayhet=?,note=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");

                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");

                }
            }
        })
    })
};
var InsertTX = function(para) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO taixe SET ?;";
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                resolve(data);

            }
        })
    })
};

var DeleteTX = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'DELETE FROM taixe WHERE id=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.affectedRows == 1) {
                    resolve(data);

                }
            }
        })
    })
};
/*
    Type Datetime fomat YYYY-MM-DD
    TABLE xebon
    Select By id
    Update para = [value1,value2,...,id]
    Insert para = json {};
 */
var SelectByIDFromXB = (para1, callback) => {
    var query = 'SELECT * from xebon Where id=?;';
    connection.query(query, [para1], (err, data, fields) => {
        if (err) {
            callback(err.stack, undefined);

        } else {
            if ((data).length == 0) {
                callback("Data Emty", data);

            } else {
                callback(undefined, data);

            }
        }
    })
};
var InsertXB = function(para) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO xebon SET ?;";
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                resolve(data);

            }
        })
    })
};
var UpdateXB = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update xebon SET bienso=?,taitrong=?,chuxe=?,giaycn=?,ngayhetvn=?,giayphepvt=?,ngayhetvt=?,sokhung=?,note=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");

                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");

                }
            }
        })
    })
};
var DeleteXB = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'DELETE FROM xebon WHERE id=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.affectedRows == 0) {
                    reject("Not Found");

                } else if (data.affectedRows == 1) {
                    resolve(data);

                }
            }
        })
    })
};
/*
    TABLE donhang
    SELECT BY ID
    INSERT
    Update
 */
//Quản lý đơn hàng
var SelectByIDFromDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'SELECT * from donhang Where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length == 0) {
                    reject("Not Found");
                } else {
                    resolve(data);

                }
            }
        })
    })
};
var SelectALLDH = function() {
    return new Promise((resolve, reject) => {
        var query = `select donhang.id,donhang.maHD,donhang.datecreate,khachhang.tenKH,taixe.cmnd,xebon.bienso,donhang.ngan1,donhang.khoiluong1,donhang.ngan2,donhang.khoiluong2,donhang.ngan3,donhang.khoiluong3,donhang.ngan4,donhang.khoiluong4,donhang.ngan5,donhang.khoiluong5,donhang.ngan6,donhang.khoiluong6,donhang.ngan7,donhang.khoiluong7,donhang.ngan8,donhang.khoiluong8,donhang.ngan9,donhang.khoiluong9,donhang.trangthai,donhang.nguoitao,donhang.ghichu,taixe.tenTX
        FROM hoakhanh.donhang
        join hoakhanh.khachhang on khachhang.id = donhang.kh
        join hoakhanh.taixe on taixe.id = donhang.taixe
        join hoakhanh.xebon on xebon.id = donhang.xe`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.length == 0) {
                    reject("Not Found");

                } else {
                    resolve(data);

                }
            }
        })
    })
};
var InsertDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO donhang SET ?;";
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                resolve(data);
            }
        })
    })
};
var UpdateDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update donhang SET typeHD=?,ctyvantaiHD=?,kh=?,taixe=?,xe=?,ngan1=?,khoiluong1=?,ngan2=?,khoiluong2=?,ngan3=?,khoiluong3=?,ngan4=?,khoiluong4=?,ngan5=?,khoiluong5=?,ngan6=?,khoiluong6=?,ngan7=?,khoiluong7=?,ngan8=?,khoiluong8=?,ngan9=?,khoiluong9=?,thanhtoan=?,ghichu=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");
                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");
                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");
                }
            }
        })
    })
};
var UpdateStatusDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update donhang SET trangthai=? where maHD=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");
                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");
                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");
                }
            }
        })
    })
};
var DeleteDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'DELETE FROM donhang WHERE id=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.affectedRows == 0) {
                    reject("Not Found");
                } else if (data.affectedRows == 1) {
                    resolve(data);

                }
            }
        })
    })
};
var CreateMaHD = function() {
    return new Promise((resolve, reject) => {
        var query = `SELECT maHD FROM hoakhanh.donhang
                    order by maHD desc
                    limit 1;`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    var time = new Date(Date.now());
                    var year = time.getFullYear();
                    var month = time.getMonth();
                    var date = time.getDate();
                    if ((time.getMonth() + 1) < 10) {
                        month = "0" + (month + 1);
                    } else {
                        month = (month + 1);
                    }
                    if (date < 10) {
                        date = "0" + date;
                    } else {
                        date = date;
                    }
                    var code = "DO" + year + month + date + "01";
                    resolve(code);
                } else {
                    var time = new Date(Date.now());
                    var year = time.getFullYear();
                    var month = time.getMonth();
                    var date = time.getDate();
                    if ((time.getMonth() + 1) < 10) {
                        month = "0" + (month + 1);
                    } else {
                        month = (month + 1);
                    }
                    if (date < 10) {
                        date = "0" + date;
                    } else {
                        date = date;
                    }
                    var code = "DO" + year + month + date;
                    var codenow = (data[0].maHD).toString();
                    var code3 = codenow.substring(0, 10);
                    var stt = codenow.substring(10, 12);
                    if (code3.toString() == code.toString()) {
                        if ((Number(stt) + 1) < 10) {
                            code = code + "0" + (Number(stt) + 1);
                        } else {
                            code = code + (Number(stt) + 1);
                        }
                    } else {
                        code = code + "01";
                    }
                    resolve(code);
                }

            }
        })

    })
};

var DOofMonth = function() {
    return new Promise((resolve, reject) => {
        var query = 'call DO005(?);';
        let t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12;
        connection.query(query, ["01"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t1 = null;
                } else {
                    t1 = data[0];
                }
            }
        });
        connection.query(query, ["02"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t2 = null;
                } else {
                    t2 = data[0];
                }
            }
        });
        connection.query(query, ["03"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t3 = null;
                } else {
                    t3 = data[0];
                }
            }
        });
        connection.query(query, ["04"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t4 = null;
                } else {
                    t4 = data[0];
                }
            }
        });
        connection.query(query, ["05"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t5 = null;
                } else {
                    t5 = data[0];
                }
            }
        });
        connection.query(query, ["06"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t6 = null;
                } else {
                    t6 = data[0];
                }
            }
        });
        connection.query(query, ["07"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t7 = null;
                } else {
                    t7 = data[0];
                }
            }
        });
        connection.query(query, ["08"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t8 = null;
                } else {
                    t8 = data[0];
                }
            }
        });
        connection.query(query, ["09"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t9 = null;
                } else {
                    t9 = data[0];
                }
            }
        });
        connection.query(query, ["10"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t10 = null;
                } else {
                    t10 = data[0];
                }
            }
        });
        connection.query(query, ["11"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t11 = null;
                } else {
                    t11 = data[0];
                }
            }
        });
        connection.query(query, ["12"], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length < 1) {
                    t12 = null;
                } else {
                    t12 = data[0];
                    resolve([t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12]);
                }
            }
        });
    })
};
var DHOfCustomer = function() {
    return new Promise((resolve, reject) => {
        let query = `call DHOfCustomer();`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var StatusWait = function() {
    return new Promise((resolve, reject) => {
        let query = `select count(*) as waitting from donhang where donhang.trangthai = "Đang chờ duyệt";`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var StatusCheck = function() {
    return new Promise((resolve, reject) => {
        let query = `select count(*) as checked from donhang where donhang.trangthai = "Đã duyệt";`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var StatusRunning = function() {
    return new Promise((resolve, reject) => {
        let query = `select count(*) as running from donhang where donhang.trangthai = "Đang xuất";`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var StatusSuccess = function() {
    return new Promise((resolve, reject) => {
        let query = `select count(*) as success from donhang where donhang.trangthai = "Hoàn thành";`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var CheckDH = function(para) {
    return new Promise((resolve, reject) => {
        let query = `Update donhang SET trangthai="Đã duyệt" where id=?;`;
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var checkUser = function(para1, para2) {
    return new Promise((resolve, reject) => {
        let query = `Select * from taikhoan where tentk=? and matkhautk=?;`;
        connection.query(query, [para1, para2], (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var UpdatePassword = function(para1, para2) {
    return new Promise((resolve, reject) => {
        let query = `Update taikhoan SET matkhautk=? where id=?;`;
        connection.query(query, [para1, para2], (err, data, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
var findOne = function(para) {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * from taikhoan Where tentk=?;';
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                resolve(data);
            }
        })
    })
};

var ALLDHSuccess = function() {
    return new Promise((resolve, reject) => {
        var query = `select donhang.id,donhang.maHD,donhang.datecreate,khachhang.tenKH,taixe.cmnd,xebon.bienso,donhang.ngan1,donhang.khoiluong1,donhang.ngan2,donhang.khoiluong2,donhang.ngan3,donhang.khoiluong3,donhang.ngan4,donhang.khoiluong4,donhang.ngan5,donhang.khoiluong5,donhang.ngan6,donhang.khoiluong6,donhang.ngan7,donhang.khoiluong7,donhang.ngan8,donhang.khoiluong8,donhang.ngan9,donhang.khoiluong9,donhang.trangthai,donhang.nguoitao,donhang.ghichu,taixe.tenTX
        FROM hoakhanh.donhang
        join hoakhanh.khachhang on khachhang.id = donhang.kh
        join hoakhanh.taixe on taixe.id = donhang.taixe
        join hoakhanh.xebon on xebon.id = donhang.xe
        where hoakhanh.donhang.trangthai = "Hoàn thành";`;
        connection.query(query, (err, data, fields) => {
            if (err) {
                reject(err.stack);

            } else {
                if (data.length == 0) {
                    reject("Not Found");

                } else {
                    resolve(data);

                }
            }
        })
    })
};
var ReportDH = function(para) {
    return new Promise((resolve, reject) => {
        var query = `select donhang.id,donhang.maHD,donhang.datecreate,khachhang.tenKH,taixe.cmnd,xebon.bienso,donhang.ngan1,donhang.khoiluong1,donhang.ngan2,donhang.khoiluong2,donhang.ngan3,donhang.khoiluong3,donhang.ngan4,donhang.khoiluong4,donhang.ngan5,donhang.khoiluong5,donhang.ngan6,donhang.khoiluong6,donhang.ngan7,donhang.khoiluong7,donhang.ngan8,donhang.khoiluong8,donhang.ngan9,donhang.khoiluong9,donhang.trangthai,donhang.nguoitao,donhang.ghichu,taixe.tenTX,taixe.ngaycap
        FROM hoakhanh.donhang
        join hoakhanh.khachhang on khachhang.id = donhang.kh
        join hoakhanh.taixe on taixe.id = donhang.taixe
        join hoakhanh.xebon on xebon.id = donhang.xe
        where hoakhanh.donhang.id =?;`;
        connection.query(query, [para], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.length == 0) {
                    reject("Not Found");
                } else {
                    resolve(data);
                }
            }
        })
    })
};

var UpdateTGBDXuat = function(para) {
    return new Promise((resolve, reject) => {
        var query = `update donhang SET tgbatdau =? where donhang.id =? and donhang.trangthai = "Đang xuất";`;
        var query2 = `SELECT donhang.id FROM hoakhanh.donhang where donhang.maHD =? and donhang.tgbatdau is null;`;
        connection.query(query2, [para[1]], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                var id;
                if (data[0].id == undefined) {
                    id = data.id;
                } else {
                    id = data[0].id;
                }
                connection.query(query, [para[0], id], (err, result, fields) => {
                    if (err) {
                        reject(err.stack);
                    } else {
                        console.log(result);
                        if (result.changedRows == 0 && result.affectedRows == 1) {
                            reject("Update Fail");
                        } else if (result.changedRows == 0 && result.affectedRows == 0) {
                            reject("Not Found");
                        } else if (result.changedRows == 1 && result.affectedRows == 1) {
                            resolve("Success");
                        }
                    }
                })
            }
        })

    })
};
var UpdateTGXXuat = function(para) {
    return new Promise((resolve, reject) => {
        var query = `update donhang SET donhang.tgxong =?, donhang.trangthai = "Hoàn thành" where donhang.maHD =? and donhang.trangthai = "Đang xuất";`;

        var query2 = `SELECT donhang.id FROM hoakhanh.donhang where donhang.maHD =? and donhang.tgxong is null;`;

        connection.query(query2, [para[1]], (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                connection.query(query, para, (err, data, fields) => {
                    if (err) {
                        reject(err.stack);
                    } else {
                        if (data.changedRows == 0 && data.affectedRows == 1) {
                            reject("Update Fail");
                        } else if (data.changedRows == 0 && data.affectedRows == 0) {
                            reject("Not Found");
                        } else if (data.changedRows == 1 && data.affectedRows == 1) {
                            resolve("Success");
                        }
                    }
                })
            }
        })

    })
};
var UpdateStatusDH2 = function(para) {
    return new Promise((resolve, reject) => {
        var query = 'Update donhang SET trangthai=? where id=?;';
        connection.query(query, para, (err, data, fields) => {
            if (err) {
                reject(err.stack);
            } else {
                if (data.changedRows == 0 && data.affectedRows == 1) {
                    reject("Update Fail");
                } else if (data.changedRows == 0 && data.affectedRows == 0) {
                    reject("Not Found");
                } else if (data.changedRows == 1 && data.affectedRows == 1) {
                    resolve("Success");
                }
            }
        })
    })
};


module.exports = { SelectALL, SelectByUserNameFromTK, SelectByIDFromTK, UpdateTK, InsertTK, DeleteTK, SelectByIDFromKH, UpdateKH, InsertKH, DeleteKH, SelectByIDFromTX, UpdateTX, InsertTX, DeleteTX, SelectByIDFromXB, InsertXB, UpdateXB, DeleteXB, SelectByIDFromDH, SelectALLDH, CreateMaHD, InsertDH, UpdateDH, DeleteDH, UpdateStatusDH, DOofMonth, DHOfCustomer, StatusSuccess, StatusRunning, StatusCheck, StatusWait, CheckDH, UpdatePassword, findOne, ALLDHSuccess, ReportDH, UpdateTGBDXuat, UpdateTGXXuat, UpdateStatusDH2 }