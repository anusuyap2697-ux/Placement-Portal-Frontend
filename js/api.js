const BASE_URL = 'https://placement-portal-3-lv7i.onrender.com';

const API = {
    async getStats() { const r = await fetch(BASE_URL + '/api/stats'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getStudents() { const r = await fetch(BASE_URL + '/api/students'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getStudentRanking() { const r = await fetch(BASE_URL + '/api/students/ranking'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addStudent(d) { const r = await fetch(BASE_URL + '/api/students', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); return r.json(); },
    async verifyStudent(id) { const r = await fetch(BASE_URL + `/api/students/${id}/verify`, { method:'PUT' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async deleteStudent(id) { const r = await fetch(BASE_URL + `/api/students/${id}`, { method:'DELETE' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getCompanies() { const r = await fetch(BASE_URL + '/api/companies'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addCompany(d) { const r = await fetch(BASE_URL + '/api/companies', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); return r.json(); },
    async approveCompany(id) { const r = await fetch(BASE_URL + `/api/companies/${id}/approve`, { method:'PUT' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getJobs() { const r = await fetch(BASE_URL + '/api/jobs'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addJob(d) { const r = await fetch(BASE_URL + '/api/jobs', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); return r.json(); },
    
    async getApplications() { const r = await fetch(BASE_URL + '/api/applications'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async applyForJob(sid, jid) {
        const r = await fetch(BASE_URL + '/api/applications', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({student_id:sid, job_id:jid}) });
        if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json();
    },
    async updateApplicationStatus(id, status) {
        const r = await fetch(BASE_URL + `/api/applications/${id}/status`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({status}) }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); }
    },
    
    async getDrives() { const r = await fetch(BASE_URL + '/api/drives'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getResumes() { const r = await fetch(BASE_URL + '/api/resumes'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async uploadResume(fd) { const r = await fetch(BASE_URL + '/api/resumes', { method:'POST', body:fd }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); },
    async deleteResume(id) { const r = await fetch(BASE_URL + `/api/resumes/${id}`, { method:'DELETE' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getInterviews() { const r = await fetch(BASE_URL + '/api/interviews'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addInterview(d) { const r = await fetch(BASE_URL + '/api/interviews', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); },
    async updateInterview(id, d) { const r = await fetch(BASE_URL + `/api/interviews/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async deleteInterview(id) { const r = await fetch(BASE_URL + `/api/interviews/${id}`, { method:'DELETE' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getActivities() { const r = await fetch(BASE_URL + '/api/activities'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getNotifications() { const r = await fetch(BASE_URL + '/api/notifications'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addNotification(d) { const r = await fetch(BASE_URL + '/api/notifications', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); return r.json(); },
    async markNotificationRead(id) { const r = await fetch(BASE_URL + `/api/notifications/${id}/read`, { method:'PUT' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async markAllNotificationsRead() { const r = await fetch(BASE_URL + '/api/notifications/read-all', { method:'PUT' }); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getOffers() { const r = await fetch(BASE_URL + '/api/offers'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async addOffer(d) { const r = await fetch(BASE_URL + '/api/offers', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); return r.json(); },
    
    async getPredictor() { const r = await fetch(BASE_URL + '/api/predictor'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async getDeptReports() { const r = await fetch(BASE_URL + '/api/reports/department'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getCompanyReports() { const r = await fetch(BASE_URL + '/api/reports/company'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    
    async search(q) { const r = await fetch(BASE_URL + `/api/search?q=${encodeURIComponent(q)}`); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },

    async getSkillGaps() { const r = await fetch(BASE_URL + '/api/skills/gap'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getTrainingModules() { const r = await fetch(BASE_URL + '/api/training'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getAlumni() { const r = await fetch(BASE_URL + '/api/alumni'); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async getResumeScore(id) { const r = await fetch(BASE_URL + `/api/resumes/score/${id}`); const t = await r.text(); try { return JSON.parse(t); } catch(e) { throw new Error(`Server returned non-JSON: ${t.substring(0, 50)}...`); } },
    async registerForDrive(id, sid) { const r = await fetch(BASE_URL + `/api/drives/${id}/register`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({student_id:sid}) }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); },
    async login(email, password) { const r = await fetch(BASE_URL + '/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email, password}) }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); },
    async forgotPassword(email) { const r = await fetch(BASE_URL + '/api/forgot-password', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email}) }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); },
    async resetPassword(email, otp, newPassword) { const r = await fetch(BASE_URL + '/api/reset-password', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email, otp, newPassword}) }); if (!r.ok) { const e = await r.json(); throw new Error(e.error); } return r.json(); }
};
window.API = API;
