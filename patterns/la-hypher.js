(function () {

var module = {
    exports: null
};

module.exports = {
	'id': ['la', 'la_VA'],
	'leftmin': 1,
	'rightmin': 1,
	'patterns': {
		2 : "1b1c1d1f1g1h1j1k1l1m1n1p1r1s1t1v1x1z8́a1e1i1o1u1y1á1æ1é1ë1í1ï1ó1ú1ü1ý1œ1ǽ1",
		3 : "2b_2bb2bd2bh2bj2bm2bn2bp2bs2bt2cc2cd2cm2cn2cq2cs2ct2cz2d_2dc2dd2df2dg2dl2dm2dn2dp2dq2ds2f_2ff2fn2ft2g_2gd2gf2gg2gm2gs2h_2hp2ht2lb2lc2ld2lf2lg2lk2ll2lm2ln2lp2lq2lr2ls2mb2mc2md2mf2ml2mm2mn2mp2mr2ms2mt2n_2nb2nc2nf2ng2nh2nj2nl2nm2nn2np2nq2nr2ns2nt2nz2p_2pn2ps2pz2rb2rc2rd2rf2rg2rl2rm2rn2rp2rq2rs2rt2rz2sb2sc2sd2sf2sg2sl2sm2sn2sp2sq2sr2sv2tb2tc2td2tf2tg2tm2tn2tp2tq2ts2tt2x_2xq2xt2y_2z_2zz4c_4dv4l_4lt4lv4lz4m_4mq4nd4nv4pp4r_4rv4s_4ss4st4t_6mv_b2_c2_f2_g2_h2_j2_l2_m2_n2_p2_r2_s2_t2_x2_z2a2ua2ya5úb2lb2rc2hc4lc6rcu3d2re3ye5úf2lf2rg2lg2ng2rh3mo3yp2hp2lp2rr2ht2lt4ru3éx2yy3ay3ey3iy3oy3uy3yy3æá2uá2yæ3aæ3eæ3iæ3oæ3uæ3áæ3éæ3íæ3óæ3úí5aí5eí5ií5oí5uí5æú5aú5eú5iú5oú5uǽ3aǽ3eǽ3iǽ3oǽ3u",
		4 : "1qu42ax_2ch_2d3h2d3w2em_2es_2et_2ex_2nx22ox_2ph_2php2pht2r1x2st_2th_2ui_2ux_2ys_2yx_3ne_4p3t4r3r_e4u_e4ú_i2e_i2o_i2é_i2ó_i3i_i3í_i4a_i4u_i4á_i4ú_s2m_é4u_í3ia1e_a1isa1ísai2eai2oai2uai2éai2óai4ibu3uch4lch4rd2æ_du3uei2aei2eei2uei2áei2éei2íei2úei4iei4oi5i_oi2aoi2eoi2ooi2uqu6ur2æ_t2h4th4mu3e_u3enu5o_ui2uuo3uái2uéi2aéi2eéi2uéi4iéi4oói2aói2eói2oói2u",
		5 : "2i2m_2i2s_2i2t_2i2x_2s3tn2sne_2st3p2th5p2th5s3p2tr3s2ce3s2ci3s2cy3s2cæ3s2cé3s2cí3s2cý3s2cœ3s2cǽ4ch3m4ch3t_a2bj_a2d3_co1e_co1i_de1í_di3u_di3ú_di3œ_dé1i_e2x3_e5um_e5un_e5úm_e5ún_hi2e_hi2é_i2d1_i3bi_i3bo_i3bu_i3bí_i3bó_i3bú_i3co_i3có_i4n3_la4u_o2b1_ob3l_ob3r_præ1_ra2y_á2d3_é2x3_í4n3_ó2b1_ób3l_ób3ra3it_a3um_a3us_b3s2tcho3eci3etcu4lccu4lncu4lpcu4mbcu4nccu4ntcu4rscú4lccú4lncú4lpd2am_d4it_e2s3re3am_e3at_e3is_g4ne_i1el_i3em_i3es_i3et_i3is_i3ud_i3um_i3ur_i3us_i5it_i5or_l3f2tlu1unlu1únn2s3fn2s3mnco3ingu2ángu2ængu2ǽngu4ingu4íngu6angu6engu6ongu6ungu6éngu6óngu6úngú7angú7engú7ingú7ongú7ungú7æo3um_ph3phqu6o_r2chmr4us_ri3e_s2t3ls2t3qs2t3ss2t3ts3se_s4t1kti1o_u1i2au1i2eu1i2ou1i2éu3em_u3es_u3et_u3is_u3it_u5um_u5us_uo3usuo3úsx2it_x2um_x2us_á3it_á3um_á3us_é3am_é3at_é3is_",
		6 : "1qui3a1qui3e1qui3o1qui3á1qui3æ1qui3é1qui3ó1qui3ǽ1qui5u1qui5ú2t1íps3p2neu3p2sic_a2b1í_a2b3c_a2b3l_a2b3r_a2bfu_a2dfu_a3d4y_a3d4æ_a3d4ý_a3s2c_a3s2p_a5s2t_ab3so_ab3só_ad3si_ader2_adi2a_adi2e_adi2o_adi2á_adi2é_anti1_ce4u__ci2s3_co2n1_coi3u_cu4sp_có2n1_de1in_de1it_de1ín_di2sj_di4s3_dí4s3_e5us__e6unu_e6únu_exs2p_he3i__he3u__i2dci_i3d2e_i3d2é_i5den_iai2u_iei2u_ini2e_ini2u_ini2é_ini2í_ini2ú_inu2a_inu2e_inu2i_inu2o_inu2u_mai4u_ne2u__ne2ut_né2ut_o4b3œ_ob3tr_obi2a_obi2e_obi2é_obu2a_obu2e_obu2i_obu2o_pne4u_po3et_pro3u_re1ie_re1in_ree2x_se4u__su2b3_sú2b3_ta2m3_te2ut_the2o_á2b3r_á3d4y_á3s2c_á3s2p_ádi2a_ádi2o_ádi2u_éxs2p_í3d2e_ób3rua2m3uiai6or_bu3is_ci3entcui4úse2l3uee5ant_ei4us_i2oi2ui3ems_i3ens_i3ent_i3unt_nu3is_pha3elqu6um_r4iit_ru3is_ru3it_su3is_ui4us_xy4s3té5ant_éi4us_",
		7 : "2s3dem_2s3que_6s5tra_6s5tri_6s5tro__a2b1eo_a2b1er_a2b1eu_a2b1eú_a2b1ic_a2b1ig_a2b1ir_a2b1it_a2b1iv_a2b1ol_a2b1om_a2b1or_a2b1ér_a2b1éu_a2b1ól_a2b1ór_a2b3ru_a2b3us_a2b3ut_a2b3út_a3b3æq_a3d4ip_a3d4on_a3d4íp_a3d4ón_a4b3es_a4d5ul_a4d5æq_a5s4tr_a5s4tu_a5s4tú_ab3si2_ab3su2_ab4s3c_ad3i2i_ad3i2u_ad3i2í_ad3i2ú_ad5is__ad5it__adi3eu_adsu3e_alte3r_alté3r_beni4a_béni4a_co1i2e_co2e1n_co3e2r_co3n2a_co3n2e_co3n2i_co3n2o_co3n2u_co3n2á_co3n2é_co3n2í_co3n2ó_co3n2ú_con3ic_coni2a_coni2e_de3s2c_de3s2p_de3s2q_di3i4u_di3i4ú_disi3c_disí3c_dé3s2p_e2t3en_e3x4ed_e3x4od_e3x4éd_e3x4ód_ex5s2t_ex5s4c_hu1i2u_hu1i2ú_hucu4s_i3d2ib_i3d2ol_i3d2on_i3d2us_i3d2ól_i3d2ón_i3n2an_i3n2it_i3n2ul_i3n2án_i4d3em_i4d3es_in3s2p_in4d3u_in4d3ú_in5s2t_ina2cr_ina2df_ine2x3_ino2b3_lu3x2u_lu3x2ú_lu4x3q_o3b2ed_o3b2el_o3b2es_o3b2ic_o3b2ig_o3b2éd_ob3i2u_ob3i2ú_ob3i4i_ob3i4í_ob3s2c_ob5s2t_obi3er_para1i_para1u_pe2r3h_pe2r3u_pe2r3ú_pe4r3j_po2t3e_po2t3é_posu3í_primi1_pro3in_præ3es_præi4a_præi4i_præi4o_præi4u_præi4á_præi4í_præi4ú_pé2r3h_pé4r3j_pó2t3e_pósu3i_re2d1h_re3ips_re3ite_re3s2p_repa2u_ré3s2p_sa3ul__subi4a_subi4e_subi4i_subi4u_subi4á_subi4é_subi4í_subi4ú_súbi4i_terp2s_tra1ii_tran2s_tri3en_trán2s_uni3an_uni3án_á2b1eo_á2b1it_á2b3ig_á2b3lu_á3d4ip_áb4s3c_álte3r_é2t3en_é3x4ed_é3x4od_éx5s2t_éx5s4c_ín4d3u_ín5s2t_ób5s2tai4unt_ge3n2uahu2c5usi2u2s3li2u2s3vi2ú2s3li2ú2s3vlu3i2a_lú3i2a_ngu4i3angu5issngu5istngu7erangu7eripo2t3enpo2t3erpo2t3espo2t3énpo2t3érpo2t3éstho3s4tthó3s4tti3n2uitru3um_tru3us_u2s3quex2u3it_x2ú3it_",
		8 : "6s5tris_6s5trum__a2b1ali_a2b1auu_a2b1i2i_a2b1i2í_a2b1i4u_a2b1i4ú_a2b1in1_a2b1ort_a2b3ier_a2b3iér_a2b3und_a2b3únd_a2d5s2t_a3b4rah_a3d4am__a3d4eps_a3d4ran_a3d4rán_a3d4u3a_a3d4u3á_a3d4urn_a4d3ole_a4s3per_a4s3pid_a5s4tip_ab3s2en_ab3s2én_ab4s3tr_ab4s3tu_ab4s3tú_ab5s4ce_ab5s4ci_ab5s4cé_ab5s4cí_ab5s4on_ab5s4ón_ab5si3l_ab5si3m_ab5su3m_ad3s2cr_alte4rc_alte4rn_alte4rp_alte4rt_alté4rc_alté4rn_alté4rp_ape3r2u_archi3e_be4th5l_bé4th5l_co2m3ed_co2m3it_co2m3éd_co2m3ít_co3e2x3_co3emen_coex3s2_con5s4t_có2m3ed_có2m3it_cón5s4t_de4uter_depe4r5_depé4r5_di2r1im_di2r1ím_di2s1i2_di2s1í2_di5s4cr_di5s4pe_di5s4pi_di5s4pé_di5s4pí_di5s4ta_di5s4tá_e3x4orc_ele2uth_elé2uth_i3di2og_i3n2ers_i3n2ert_i4d3eo__i4d3eoq_i4d3eóq_i4n3ulc_in3s4cr_in4d3ep_in4d3ig_in4d3ép_in5d4is_in5d4uc_in5d4ul_in5d4um_in5d4us_in5d4ux_in5d4úc_in5d4úl_in5d4úm_in5d4ús_in5d4úx_ina2b3r_inab3s2_inexs2t_ino2b3œ_ne2c1op_ne2c1óp_ne2g1ot_ne2g1ót_o3b4ruz_o4b3ici_ob3s2cu_pe1i6or_pe1i6ór_pe2r1ac_pe2r1ae_pe2r1ar_pe2r1cu_pe2r1el_pe2r1em_pe2r1od_pe2r1of_pe2r1ol_pe2r1op_pe2r1ác_pe2r1ár_pe2r1ém_pe2r3ag_pe2r3ea_pe2r3eo_pe2r3eu_pe2r3eú_pe2r3i1_pe2r3ib_pe2r3ie_pe2r3in_pe2r3ir_pe2r3ié_pe2r3ág_pe2r3ég_pe2r3í1_pe2r3íb_pe2r3íe_pe2r3ín_pe2r3ír_pe3r4ia_pe3r4io_pe3r4it_pe3r4iá_pe3r4ul_pe3r4ít_pe3r4úl_pe4r1ed_pe4r3ec_pe4r3im_pe4r3or_pe4r3ím_pe4r3ór_per5iit_perie3i_perié3i_períe3i_po4t3ue_po4t3ui_po4t3ué_po4t3uí_po4t3úe_po4t3úi_pos4t3h_pro3g2n_pro3i4e_pro3i4i_pro3i4é_pro3i4í_pro3s2c_pro3s2p_pro5s2t_præ3a2u_præ3s2c_præ3s2p_præ5s2t_præi4ec_pró3i4i_pró3s2p_pse4udo_pé2r3ag_pé2r3eo_pé2r3eu_pé2r3ii_pé4r3im_pér5iit_pó4t3ui_quo6d5l_re2d1ac_re2d1ad_re2d1am_re2d1an_re2d1ar_re2d1ea_re2d1eg_re2d1em_re2d1eo_re2d1eu_re2d1eá_re2d1eú_re2d1i__re2d1ib_re2d1ig_re2d1ii_re2d1im_re2d1in_re2d1ir_re2d1iv_re2d1ií_re2d1ol_re2d1op_re2d1ul_re2d1un_re2d1uv_re2d1ác_re2d1ád_re2d1ám_re2d1án_re2d1ár_re2d1ég_re2d1ém_re2d1íb_re2d1íi_re2d1ím_re2d1ín_re2d1ír_re2d1ív_re2d1ól_re2d1óp_re2d1úl_re2d1ún_re2d1úv_re2d5is_re2d5it_re2d5ít_re3d2ic_re3i2ec_re3s2cr_re3s2cu_re3s2cú_re5s2to_re5s4ta_re5s4tr_re5s4tá_ré2d1ea_ré2d1eo_ré2d1eu_ré2d1ig_ré2d1ii_ré2d1im_ré2d1ol_ré2d5it_ré5s4tr_sa2t1ag_sa2t1ág_sati2s1_se2m3un_se2m3us_si2c1ut_sta3g2n_su3b4ul_su5s4cr_sub5s4t_sí2c1ut_sú3b4ul_súb5s4t_te2r1un_te2r1ún_the3s2p_the3s2t_thi3s2b_tra1i2a_tra1i2e_trans1e_trans3i_trans3í_transa2_tráns1e_tráns3i_ve2l1ut_za2i3eu_zeu3g2m_á2b1i2i_á3b4rah_á3d4ran_á4s3per_á4s3pid_áb4s3tr_áb5s4on_í4d3eo__ín4d3iglangu5i_lángu5i_me4t3ipsngu7ero_ngu8eri_ngu8eris",
		9 : "_a2b1i2ec_a2b1i2éc_a3d4i3ab_a3d4i3áb_a5s4perg_a5s4pern_a5s4tern_ab3s2ten_ab4s3tem_ab4s3ter_ab4s3tin_ab4s3tém_ab4s3tér_ab4s3tín_ab5s4cin_ab5s4cis_ab5s4cín_ab5s4i3d_ani2m3ad_anti3m2n_circu4m1_circú4m1_co2m3es__co3e2lec_co3e2lig_co3g2nos_co3g2nós_co4n3i2u_co4n3i2ú_co6n3i4i_co6n3i4í_con3s2cr_con3s2p2_có4n3i2u_cón3s2cr_cón3s2p2_de5s2til_de5s2tit_de5s2tru_de5s2trú_de5s2tíl_de5s2tít_di5s4ced_di5s4cen_di5s4cep_di5s4cer_di5s4ces_di5s4cid_di5s4cin_di5s4cip_di5s4cit_di5s4céd_di5s4cén_di5s4cép_di5s4cér_di5s4cés_di5s4cíd_di5s4cín_di5s4cíp_di5s4ert_di5s4tin_di5s4tir_di5s4to__di5s4tín_di5s4tír_di5s4ért_di6s5cre_di6s5cru_di6s5cré_di6s5pen_di6s5per_di6s5pén_di6s5pér_dé5s2tru_dí5s4cit_e2t3i3am_e2t3i3ám_e3x4eget_e3x4egét_haru3s4p_harú3s4p_in5d4ign_in5d4ígn_infra3s4_ino3b2oe_inob3s2c_inte2r3e_inte2r3i_inte2r3é_inte2r3í_interi2a_interi2e_interi2i_interi2u_interi2á_interi2é_interi2í_interi2ú_interí2e_inté2r3e_inté2r3i_lon2g1an_lon2g1án_pe2r1a2u_pe2r1ama_pe2r1amb_pe2r1amá_pe2r1coq_pe2r1eff_pe2r1eru_pe2r1u2a_pe2r1u2e_pe2r1u2i_pe2r1u2o_pe2r1ámb_pe2r3eas_pe2r3es__pe2r3eám_pe2r3eát_pe2r3i4u_pe2r3i4ú_pe2r3reg_pe2r3s2c_pe2r3s2p_pe2r7s2t_pe3r4ian_pe3r4icl_pe3r4icu_pe3r4ieb_pe3r4iem_pe3r4ien_pe3r4ier_pe3r4iet_pe3r4int_pe3r4iod_pe3r4iri_pe3r4iéb_pe3r4iém_pe3r4ién_pe3r4iér_pe3r4iét_pe3r4iód_pe3r4ícl_pe3r4ícu_pe3r4íer_pe3r4ínt_pe3r4íri_pe4r3ant_pe4r3enn_pe4r3err_pe4r3énn_pe4r3érr_pe4r5end_pe4r5it__pe4r5énd_pe5r4imi_pe5r4imu_pe5r4ími_pe5r4ímu_pe6r3egr_peri3p2s_peri3p2t_peri3s2t_pos4t3ea_pos4t3er_pos4t3eá_pos4t3il_pos4t3ér_pos4t3íl_pro2d1ea_pro2d1eo_pro2d1ib_pro2d1ig_pro2d1im_pro2d1ir_pro2d1íg_pro2d1ír_pro2d3is_pro2d3ís_pro2d5it_pro2d5ít_præte2r1_præté2r1_pró2d1ea_pró2d1eo_pró2d1ig_pæ2n3ins_pæ2n3íns_pé2r3eam_pé2r3eas_pé2r3eat_pé2r7s2t_pé6r3egr_pós4t3ea_pós4t3er_quo2t1an_quo2t3li_re2d1a2u_re2d1amb_re2d1arg_re2d1ien_re2d1ier_re2d1iér_re2d1ord_re2d1orn_re2d1á2u_re2d1ámb_re2d1árg_re2d1íer_re2d1órd_re2d1órn_re3d2orm_re3s2pec_re3s2péc_re4d3imi_re5s2tag_re5s2ter_re5s2tib_re5s2tic_re5s2til_re5s2tin_re5s2tip_re5s2tér_re5s2tíb_re5s2tín_re5s2típ_re5s4tit_re5s4tít_ré2d1ien_ré5s4tit_se3s4cen_si3s2ten_su3s2pec_su3s2pic_su3s2pir_su3s2péc_su3s2píc_su3s2pír_su4b5ulc_su4b5ult_su4s3pen_su4s3pén_sub5s4cr_supe2r1c_supe2r1d_supe2r1æ_supe2r3h_supe2r3u_supe2r3ú_supé2r1c_supé2r1d_supé2r1æ_sú3s2pic_te2r1i2u_theo3g2n_tra2n1ue_tran3s2c_trans1o2_trans1u2_trans3ea_trans3íb_transe2u_transe2ú_transi3e_transi3é_tráns3ea_tránse2u_tránsi3e_ute2r3ui_á2d5s2tr_áb4s3tin_áb5s4i3d_é2t3i3am_ínte2r3ilangu5it_lángu5it_ngu6isse_",
		10 : "6s5trorum_6s5trórum__a4d5ipisc_a4d5ipísc_alte4r3ut_alte4r3út_alté4r3ut_circum5s4_circumi2a_circumi2e_circumi2i_circumi2o_circumi2u_circumi2á_circumi2í_co6n5i4ec_co6n5i4éc_cu4m5s4cr_di3g2nosc_di5s4ciss_di5s4císs_di5s4tric_di5s4trin_di5s4tríc_di5s4trín_di6s5crim_di6s5cruc_di6s5crím_di6s5crúc_di6s5tine_di6s5tíne_di7s6perg_di7s6pers_di7s6pérg_di7s6pérs_dispe4r5e_dispe4r5i_dispé4r5e_dispé4r5i_in4d3ipis_in4d3ipís_incircu4m_inte3r4em_inte3r4en_inte3r4er_inte3r4es_inte3r4et_inte3r4ém_inte3r4én_inte3r4ér_inte3r4ét_intro3i3e_intro3i3é_intro3s4p_inté3r4er_iu2s3i2ur_lecti5s4t_pe2r1a2dp_pe2r1absu_pe2r1i2ac_pe2r1i2ec_pe3r4i5un_pe3r4i5ún_pe3r4irer_pe3r4iret_pe3r4irér_pe3r4irét_pe3r4írer_pe4r1e2x3_pe4r5iens_pe4r5iera_pe4r5itur_pe4r5itúr_pe4r5íera_pe4r5ítur_pe6r5imus_pe6r5ímus_primi3s2c_pro2d1eun_pro2d1fu2_pro2d1ien_pro2d1ier_pro2d1ién_pro2d1iér_pro2d3ii__pro3d2i3d_pro3d2í3d_pro3d6iti_pro3d6ito_pro3d6itr_pro3d6íti_pro3d6íto_pro4s3tit_pro4s3tra_pro4s3trá_pro5s4tan_pro5s4tar_propte2r3_propté2r3_pró2d1ien_pró2d1ier_pró2d3ii__pé2r3eant_pé4r5iens_pé4r5iera_quin2c3un_quo2t1enn_quo6n3iam_quó6n3iam_re5s4ta2u_re6s3ticu_seme2t3ip_ses2c1u4n_subte2r3h_supe2r1ab_supe2r1ac_supe2r1ad_supe2r1ag_supe2r1ed_supe2r1eg_supe2r1el_supe2r1em_supe2r1en_supe2r1er_supe2r1es_supe2r1eu_supe2r1ev_supe2r1il_supe2r1im_supe2r1in_supe2r1ir_supe2r1oc_supe2r1op_supe2r1áb_supe2r1ád_supe2r1ág_supe2r1él_supe2r1ém_supe2r1én_supe2r1és_supe2r1év_supe2r1íl_supe2r1óc_supe2r3i2_supe3r2am_supe3r2or_supe3r2æ__supe3r4i__supe4r3ap_super3es__supra3s2c_supé2r1ab_supé2r1ad_supé2r1ag_supé2r1ed_supé2r1eg_supé2r1em_supé2r1en_supé2r1er_supé2r3i2_supé3r2am_supé3r2æ__supé3r4i__súpe2r1es_súper3es__tetra3e2t_tetra3g2n_tetra3s2t_tran3s2en_tran3s2um_tran3s4il_tran3s4íl_trans1a2u_trans1act_tráns3i4ingu7erunt_ngu7érunt_su2b5s4tan",
		11 : "_a2d3a3s4cr_circú4m5s4_inpe2r3iur_inte4r5ess_pe2r1a2d1u_pe3r4i3s2c_pe3r4iremi_pe3r4irémi_pe3r4í3s2c_pe4r5iret__pe4r5itote_pe4r5itóte_pe5r6ierat_pe5r6íerat_po4s4t3hac_pro1de1amb_pro2d1es3s_pro2d1és3s_pé5r6ierat_qua2m3o2b3_quoa2d3usq_quoa2d3úsq_supe2r1all_supe2r1arg_supe2r1asc_supe2r1att_supe2r1bib_supe2r1bif_supe2r1bil_supe2r1eff_supe2r1áll_supe2r1éff_supe2r3s2c_supe2r3s2p_supe2r5s4t_supe3r2aba_supe3r2abe_supe3r2abi_supe3r2abo_supe3r2abu_supe3r2abá_supe3r2abí_supe3r2abú_supe3r2and_supe3r2em__supe3r2emu_supe3r2ent_supe3r2er__supe3r2us__supe3r2ába_supe3r2ábe_supe3r2ábi_supe3r2ábo_supe3r2ábu_supe3r2ánd_supe3r2ému_supe3r2ént_supe3r4i3o_supe3r4i3u_supe3r4i3ó_supe3r4is__supe3r4um__supe4r3amb_supe4r3ord_supe4r3ámb_supera2b3l_superá2b3l_supé2r1arg_supé2r1att_supé2r1bib_supé2r1bif_supé2r1bil_supé2r1eff_supé2r5s4t_supé3r2abu_supé3r4i3o_supé3r4i3u_supé3r4is__trans1a2d1_u3n2i3usculangu5imus_lángu5imus_",
		12 : "_inte2r3s4pe_inte2r3s4pé_inte3r4i3or_inte3r4i3ór_inte3r4ius__inté3r4i3or_inté3r4ius__pe3r4iremur_pe3r4irémur_pe4r5iretis_pe4r5irétis_que2m3a2d3m_que2m3á2d3m_supe2r1e2x3_supe3r2ere__superin3i4i_superin3i4í_supé2r1e2x3_trans1a2b1i_trans1a2b1í",
		13 : "_pe2r1o2b3s2c_pe2r3tran2s1_pe2r3trán2s1_pe3r4irentur_pe3r4iréntur_supe2r1a3s2p_supe2r1a3s2t_supe2r1o2b1d_supe2r1o2b1u_supe2r1o2b1ú_supe2r1o2b3r_supe2r1ó2b3r_supe3r2eris__supe4r5i4ume_supera2d1i2i_supera2d1i2í_supé2r1a3s2p_supé2r1a3s2t_supé3r2eris__trans1a2b1e2_trans1a2b1é2",
		14 : "_circumi2n3i4i_supe2r1ad3s2t_supe3r2emini__supe3r2émini__supe4r3a2b3um_supé2r1ad3s2t",
		15 : "_re4s3pu4b3l4ic_re4s3pú4b3l4ic_supe2r1sub3s2t_supe3r4i3mini__supe4r3a2b3und_supe4r3a2b3únd"
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());
