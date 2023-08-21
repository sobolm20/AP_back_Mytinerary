const errorHandler = (error, req, res, next) => {
    let status = error.status || 500;
    console.log(error.stack);

    console.log(error)
    res.status(status).json({
        success: false,
        error: error
    })

}


export default errorHandler