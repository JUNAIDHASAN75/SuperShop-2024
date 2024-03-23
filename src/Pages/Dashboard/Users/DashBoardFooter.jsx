

const DashBoardFooter = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <footer className="footer footer-center p-4 bg-gradient-to-t from-slate-600 to-slate-900 text-base-content">
                <aside className="text-white">
                    <p>Copyright © {currentYear} - All right reserved by UMART Online Shop Ltd.</p>
                </aside>
            </footer>
        </div>
    );
};

export default DashBoardFooter;