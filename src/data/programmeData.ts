export interface PrayerDay {
  dayNumber: number;
  date: string;
  dateIso: string;
  dayName: string;
  theme: string;
  scriptures: string[];
  scriptureText?: string;
  exhortation: string;
  prayerDirection: string;
  prayerPoints: string[];
}

export interface ProgrammeMeta {
  fullName: string;
  edition: string;
  year: number;
  dates: string;
  startDateIso: string;
  endDateIso: string;
  theme: string;
  tagline: string;
  poweredBy: string;
  participationLevels: string[];
  fastingGuideline: string;
}

export const PROGRAMME_META: ProgrammeMeta = {
  fullName: 'All Believers 21 Day Fasting And Prayer 2026',
  edition: '32nd Edition of 21 Day Fasting And Prayer (1994–2026)',
  year: 2026,
  dates: '12 October – 1 November 2026',
  startDateIso: '2026-10-12',
  endDateIso: '2026-11-01',
  theme: 'Jesus: The Way Maker',
  tagline: 'Standing in the Gap for Individuals, Families, Communities, and Nations',
  poweredBy: 'Nations Prayer and Fasting Network (NAPFAN)',
  participationLevels: [
    'Family',
    'Fellowship',
    'Prayer Group',
    'Professional',
    'Church',
    'Community',
    'National',
  ],
  fastingGuideline:
    'Participants may choose their own fasting duration and schedule according to personal and spiritual capacity, while the full 21 days of consecrated prayer and fasting are strongly recommended for deep breakthrough and continental impact.',
};

export const PROGRAMME_DAYS: PrayerDay[] = [
  {
    dayNumber: 1,
    date: 'Monday, 12 October 2026',
    dateIso: '2026-10-12',
    dayName: 'Monday',
    theme: 'Hope in times of distress',
    scriptures: ['Psalm 46:1-5', 'Romans 15:13', 'Isaiah 41:10'],
    scriptureText: 'God is our refuge and strength, a very present help in trouble. Therefore we will not fear.',
    exhortation:
      'We begin this sacred 21-day consecration by anchoring our souls in the unfailing refuge of the living God. Even when nations are troubled, economies shake, and hearts faint from uncertainty, Jesus remains our Way Maker. Hope is not wishful thinking; it is the confident assurance that God has not abandoned His covenant. Lay down every fear and anxiety today at the feet of Christ.',
    prayerDirection:
      'Consecrate yourself, your family, and your nation, asking the God of hope to fill every weary heart with unshakeable faith and divine peace.',
    prayerPoints: [
      'Father, I present my spirit, soul, and body as a living sacrifice; sanctify me and ignite a fresh altar of prayer within me for these 21 days.',
      'Lord Jesus, You are my refuge; let the peace that surpasses human understanding take absolute dominion over my heart, family, and home.',
      'We lift our communities and nation before You: overturn every wave of hopelessness and despair with the light of the glorious Gospel.',
      'Give grace to every believer entering this fast across the nations; grant stamina, spiritual focus, and an open heaven throughout this season.',
    ],
  },
  {
    dayNumber: 2,
    date: 'Tuesday, 13 October 2026',
    dateIso: '2026-10-13',
    dayName: 'Tuesday',
    theme: 'The God who opens doors no man can shut',
    scriptures: ['Revelation 3:7-8', 'Isaiah 22:22', '1 Corinthians 16:9'],
    scriptureText: 'See, I have placed before you an open door that no one can shut.',
    exhortation:
      'When Jesus moves as the Way Maker, closed doors of limitation, oppression, and long-standing delays are forced open by His sovereign power. No earthly gatekeeper or demonic opposition can withstand the key of David in the hand of our Lord. Look away from natural obstacles and fix your eyes on Him who governs human history.',
    prayerDirection:
      'Pray for divine open doors in personal callings, marital destiny, ministry expansion, and economic relief across the nations.',
    prayerPoints: [
      'By the authority of Jesus, the Way Maker, let every ancient gate resisting God’s counsel in my life be lifted up forever.',
      'Lord, open doors of spiritual influence and utterance for Your Church in every city and nation.',
      'I break free from every cycle of frustration, stagnation, and closed doors; I step into divine favour and progress.',
      'Father, unlock righteous avenues of economic sustenance and leadership integrity for our families and communities.',
    ],
  },
  {
    dayNumber: 3,
    date: 'Wednesday, 14 October 2026',
    dateIso: '2026-10-14',
    dayName: 'Wednesday',
    theme: 'Making a path through the wilderness',
    scriptures: ['Isaiah 43:18-19', 'Exodus 14:13-16', 'Proverbs 3:5-6'],
    scriptureText: 'Behold, I will do a new thing; now it shall spring forth... I will even make a way in the wilderness and rivers in the desert.',
    exhortation:
      'The wilderness represents dry, uncharted, and barren territories where human intellect and resources fail. It is precisely in such conditions that Jesus reveals His majesty as the Way Maker. Do not dwell mournfully on past defeats; God is already carving out rivers of refreshing in the dry places of your journey.',
    prayerDirection:
      'Intercede for people trapped in dry spiritual seasons, calling forth rivers of the Holy Spirit to revive desert places.',
    prayerPoints: [
      'Lord, do a new thing in my life, home, and assembly; let fresh streams of Your presence break through dry ground.',
      'Wherever the road appears completely blocked before me, make a supernatural path of escape and advancement.',
      'We pray for drought-stricken regions and dry souls: release showers of spiritual awakening and tangible relief.',
      'Grant us divine discernment to perceive the new pathways the Holy Spirit is opening in this dispensation.',
    ],
  },
  {
    dayNumber: 4,
    date: 'Thursday, 15 October 2026',
    dateIso: '2026-10-15',
    dayName: 'Thursday',
    theme: 'Deliverance from overwhelming waters',
    scriptures: ['Isaiah 43:2', 'Psalm 124:1-8', 'Psalm 69:1-2'],
    scriptureText: 'When you pass through the waters, I will be with you; and through the rivers, they shall not overflow you.',
    exhortation:
      'Scripture does not promise an absence of turbulent waters, but it promises an absolute guarantee: the waters shall not drown you. When the adversary comes in like a flood, the Spirit of the Lord raises a standard against him. Stand firmly in the gap for those who feel emotionally, physically, or spiritually submerged today.',
    prayerDirection:
      'Pray against every overwhelming flood of affliction, depression, financial pressure, or spiritual attack targeting believers and families.',
    prayerPoints: [
      'Father, by Your unfailing covenant, rescue my soul from every tempest of life that seeks to overwhelm my faith.',
      'We declare over vulnerable families: the flood of darkness, violence, and despair shall not prevail against you.',
      'Raise a divine standard against every covert assignment of destruction assigned against our children and youths.',
      'Thank You, Jesus, because our help is in the name of the Lord who made heaven and earth.',
    ],
  },
  {
    dayNumber: 5,
    date: 'Friday, 16 October 2026',
    dateIso: '2026-10-16',
    dayName: 'Friday',
    theme: 'Breaking the chains of affliction and fear',
    scriptures: ['Psalm 107:13-16', '2 Timothy 1:7', 'Galatians 5:1'],
    scriptureText: 'He brought them out of darkness and the shadow of death, and broke their chains in pieces.',
    exhortation:
      'Fear is a paralyzing weapon of the enemy, but Jesus has broken the gates of bronze and cut the bars of iron asunder. Through persistent fasting and prayer, longstanding yokes of ancestral affliction, generational captivity, and chronic torment are shattered by the anointing of the Holy Spirit.',
    prayerDirection:
      'Denounce every spirit of fear and declare spiritual emancipation for individuals, households, and oppressed communities.',
    prayerPoints: [
      'In the name of Jesus, let every chain of darkness, addiction, and fear binding my mind and household be shattered to pieces.',
      'We speak liberty to captives of spiritual oppression; let the light of Christ shatter every dark dungeon of bondage.',
      'We bind and cast out the spirit of fear and anxiety; we receive the spirit of power, of love, and of a sound mind.',
      'Deliver our communities from territorial strongholds that promote crime, vices, and hopelessness.',
    ],
  },
  {
    dayNumber: 6,
    date: 'Saturday, 17 October 2026',
    dateIso: '2026-10-17',
    dayName: 'Saturday',
    theme: 'Divine guidance in dark seasons',
    scriptures: ['Psalm 23:1-4', 'John 8:12', 'Psalm 119:105'],
    scriptureText: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil; for You are with me.',
    exhortation:
      'Even in the dense shadows of life, the Good Shepherd does not abandon His flock. He leads us beside still waters and restores our souls. When the path ahead seems ambiguous, Jesus is the Light of the world. Follow His word, listen for His gentle whisper, and refuse to step out in fleshly haste.',
    prayerDirection:
      'Seek precise divine direction for the coming season in your decisions, relationships, career, ministry, and national governance.',
    prayerPoints: [
      'Lord Jesus, shine Your glorious light upon my path; lead me away from every ditch of confusion and error.',
      'Grant me ears that hear the voice of the Shepherd saying, “This is the way, walk in it.”',
      'We pray for church leaders and pastors: endue them with apostolic clarity and prophetic guidance for their flocks.',
      'Guide civil leaders and judicial authorities to enact justice and righteousness in our nations.',
    ],
  },
  {
    dayNumber: 7,
    date: 'Sunday, 18 October 2026',
    dateIso: '2026-10-18',
    dayName: 'Sunday',
    theme: 'Mercy, forgiveness, and consecration for families',
    scriptures: ['Daniel 9:8-9', 'Lamentations 3:22-23', 'Joshua 24:15'],
    scriptureText: 'To the Lord our God belong mercy and forgiveness, though we have rebelled against Him.',
    exhortation:
      'On this Lord’s Day, we stand before the mercy seat. As intercessors, we do not present our supplications based on human merit, but upon God’s great mercies. Families are the bedrock of any civilization; when families are consecrated to God, the moral fabric of nations is preserved. Bring your lineage before God for cleansing and covenant renewal.',
    prayerDirection:
      'Cry out for divine mercy over personal transgressions, family estrangements, and corporate shortcomings across the Church.',
    prayerPoints: [
      'Have mercy upon us, O God, according to Your lovingkindness; blot out our transgressions with the precious blood of Jesus.',
      'We dedicate our households anew to You: as for me and my house, we will serve the Lord in holiness and truth.',
      'Heal every wounded marriage, reconcile estranged parents and children, and establish the peace of Christ in our homes.',
      'Let the fountain of Your mercy wash over our local congregations and revive spiritual sincerity among believers.',
    ],
  },
  {
    dayNumber: 8,
    date: 'Monday, 19 October 2026',
    dateIso: '2026-10-19',
    dayName: 'Monday',
    theme: 'Healing and restoration for the brokenhearted',
    scriptures: ['Psalm 147:3', 'Jeremiah 30:17', 'Isaiah 61:1-3'],
    scriptureText: 'He heals the brokenhearted and binds up their wounds.',
    exhortation:
      'Many walk through life with hidden scars of betrayal, grief, and emotional trauma. Jesus, our Great Physician, does not overlook the wounded. He was wounded for our transgressions and bruised for our iniquities, that by His stripes we might receive total wholeness. Expect physical, emotional, and relational healing today.',
    prayerDirection:
      'Pray for profound inner healing, restoration of lost years, and physical wellness for those battling chronic illnesses.',
    prayerPoints: [
      'Lord Jesus, lay Your healing hand upon every wounded area of my soul and restore the joy of my salvation.',
      'By the stripes of Jesus Christ, we speak supernatural healing to afflicted bodies, chronic pain, and terminal diseases.',
      'We comfort those mourning the loss of loved ones; let the Holy Spirit minister deep comfort and divine resilience.',
      'Restore to Your people the years that the swarming locust, the crawling locust, and the consuming locust have eaten.',
    ],
  },
  {
    dayNumber: 9,
    date: 'Tuesday, 20 October 2026',
    dateIso: '2026-10-20',
    dayName: 'Tuesday',
    theme: 'Supernatural provision in times of scarcity',
    scriptures: ['Philippians 4:19', '1 Kings 17:12-16', 'Psalm 37:25'],
    scriptureText: 'And my God shall supply all your need according to His riches in glory by Christ Jesus.',
    exhortation:
      'The economy of the Kingdom of God does not operate on worldly market volatility. Just as God sustained Elijah at the brook Cherith and through the widow’s jar of flour in Zarephath, He is faithful to sustain His children in times of economic famine. Trust the Way Maker as your ultimate Provider.',
    prayerDirection:
      'Pray for supernatural economic breakthrough, employment opportunities, and wisdom in financial stewardship for believers.',
    prayerPoints: [
      'Jehovah Jireh, You are my Provider; let every genuine need in my life and ministry be met according to Your riches in glory.',
      'Break the back of systemic poverty and economic despair in our communities through righteous enterprise and divine ideas.',
      'We release wisdom and opportunities for kingdom entrepreneurs to build resources for the preaching of the Gospel.',
      'Preserve the poor, the widows, the orphans, and the displaced across our continent from lack and starvation.',
    ],
  },
  {
    dayNumber: 10,
    date: 'Wednesday, 21 October 2026',
    dateIso: '2026-10-21',
    dayName: 'Wednesday',
    theme: 'Turning mourning into dancing',
    scriptures: ['Psalm 30:11-12', 'Jeremiah 31:13', 'Isaiah 35:10'],
    scriptureText: 'You have turned for me my mourning into dancing; You have put off my sackcloth and clothed me with gladness.',
    exhortation:
      'As we reach the midpoint of our 21-day consecration, a prophetic shift is taking place. The season of weeping is giving way to the morning of joy. Jesus transforms funerals into celebrations and defeats into victory parades. Lift up your voice in high praise even before the physical evidence appears!',
    prayerDirection:
      'Engage in aggressive prophetic thanksgiving, declaring that seasons of sorrow, tragedy, and reproach are coming to an end.',
    prayerPoints: [
      'Father, I thank You because every garment of heaviness, shame, and mourning is exchanged for the oil of joy and praise.',
      'Overturn every satanic verdict against my health, career, and spiritual walk into an undeniable testimony of triumph.',
      'Let the shout of celebration and victory be heard continually in the tabernacles of the righteous.',
      'We declare over weary nations: a season of divine visitation and joy is breaking forth in Jesus’ name.',
    ],
  },
  {
    dayNumber: 11,
    date: 'Thursday, 22 October 2026',
    dateIso: '2026-10-22',
    dayName: 'Thursday',
    theme: 'Wisdom and righteousness for leaders and nations',
    scriptures: ['1 Timothy 2:1-4', 'Proverbs 21:1', 'Proverbs 14:34'],
    scriptureText: 'Righteousness exalts a nation, but sin is a reproach to any people.',
    exhortation:
      'Scripture urges us first of all to make supplications, prayers, and intercessions for kings and all in authority, that we may lead a quiet and peaceable life. When righteous leaders rule, the people rejoice. We must not merely complain about governance; we must stand on the walls as watchmen interceding for godly wisdom to prevail in halls of power.',
    prayerDirection:
      'Intercede for presidents, governors, judicial officers, traditional rulers, and policymakers across Africa and the nations.',
    prayerPoints: [
      'Lord, incline the hearts of our national and local leaders toward justice, integrity, and genuine compassion for the people.',
      'Deliver our governments from corrupt advisers, selfish ambition, and ungodly policies that oppose God’s laws.',
      'Raise Josephs, Daniels, and Esthers in corridors of influence who will speak truth with courage and spiritual excellence.',
      'Let peace, safety, and economic stability reign across our borders for the flourishing of the populace.',
    ],
  },
  {
    dayNumber: 12,
    date: 'Friday, 23 October 2026',
    dateIso: '2026-10-23',
    dayName: 'Friday',
    theme: 'Pulling down strongholds of strife and division',
    scriptures: ['2 Corinthians 10:4-5', 'Ephesians 6:12', 'Psalm 133:1-3'],
    scriptureText: 'For the weapons of our warfare are not carnal, but mighty in God for pulling down strongholds.',
    exhortation:
      'The enemy frequently sows seeds of tribal, racial, denominational, and familial division to weaken corporate strength. But when brethren dwell together in unity, the Lord commands His blessing—even life forevermore. In this fast, we tear down strongholds of pride, bitterness, and religious sectarianism.',
    prayerDirection:
      'War against spirits of communal clashes, sectarian hatred, theological pride, and factional strife in the body of Christ.',
    prayerPoints: [
      'We pull down every satanic ideology, ancestral wall of division, and ethnic bitterness operating in our land.',
      'Let the unifying love of Jesus Christ baptize the Church across all denominations and cultural backgrounds.',
      'We break the power of spiritual blindness and demonic deception blinding the minds of men against the truth.',
      'Lord, release the commanded blessing of Psalm 133 upon our prayer fellowships and local congregations.',
    ],
  },
  {
    dayNumber: 13,
    date: 'Saturday, 24 October 2026',
    dateIso: '2026-10-24',
    dayName: 'Saturday',
    theme: 'Revival fire upon the youth and next generation',
    scriptures: ['Joel 2:28-29', 'Malachi 4:6', 'Psalm 127:3-5'],
    scriptureText: 'I will pour out My Spirit on all flesh; your sons and your daughters shall prophesy.',
    exhortation:
      'Our young people are not fodder for secular corruption or demonic exploitation; they are arrows in the hand of a mighty warrior. God has reserved a generation of youths who will not bow to Baal, but will burn with holy fire, purity, and apostolic passion for Jesus Christ. Contend for their souls with earnest tears and faith.',
    prayerDirection:
      'Pray for children, teenagers, university students, and young professionals: ask God to baptize them with the Holy Spirit and divine purpose.',
    prayerPoints: [
      'Father, pour out Your Spirit upon our sons and daughters; let them see visions of righteousness and walk in purity.',
      'Rescue our youth from the snares of moral perversion, occultism, digital addiction, and destructive ideologies.',
      'Raise young preachers, teachers, innovators, and leaders who will boldly champion the Gospel of Christ in every sphere.',
      'Turn the hearts of the fathers to the children, and the hearts of the children to their fathers, restoring godly homes.',
    ],
  },
  {
    dayNumber: 14,
    date: 'Sunday, 25 October 2026',
    dateIso: '2026-10-25',
    dayName: 'Sunday',
    theme: 'Renewed strength for those who wait on the Lord',
    scriptures: ['Isaiah 40:29-31', 'Galatians 6:9', 'Psalm 27:14'],
    scriptureText: 'Those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles.',
    exhortation:
      'Two weeks into our consecration, physical fatigue may attempt to creep in, but spiritual strength is renewed daily as we wait upon God. Spiritual waiting is not passive idleness; it is expectant, reverent focus on the Almighty. As eagles mount up above the storm, so shall the Spirit of God lift your spirit above worldly weariness.',
    prayerDirection:
      'Pray for pastors, front-line missionaries, intercessors, and caregivers who feel physically, emotionally, or spiritually drained.',
    prayerPoints: [
      'Father, renew my strength; take away every spiritual fatigue, and grant me supernatural vigor to finish this fast victoriously.',
      'We uphold weary servants of God worldwide: let angels of strength minister to them in their secret chambers.',
      'I receive divine wings of faith to soar above financial pressures, health challenges, and emotional burdens.',
      'Lord, let Your Church receive a fresh baptism of spiritual endurance to withstand the pressures of this present age.',
    ],
  },
  {
    dayNumber: 15,
    date: 'Monday, 26 October 2026',
    dateIso: '2026-10-26',
    dayName: 'Monday',
    theme: 'Divine shield and deliverance from evil',
    scriptures: ['Psalm 91:1-16', '2 Thessalonians 3:3', 'Psalm 121:7-8'],
    scriptureText: 'He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty.',
    exhortation:
      'The shadow of the Almighty is an impenetrable fortress. No plague, arrow, snare, or terror can pierce the hedge of God’s covenant protection. Walk in divine boldness, knowing that the Lord who guards Israel neither slumbers nor sleeps. You and your household are sealed by the blood of the Lamb.',
    prayerDirection:
      'Claim the 91st Psalm over your travels, homes, children, communities, and national boundaries.',
    prayerPoints: [
      'Lord, hide me and my family under the shadow of Your wings; let no weapon formed against us prosper.',
      'We cancel every assignment of untimely death, armed violence, kidnappings, and road accidents across our lands.',
      'Let the blood of Jesus speak protection over our going out and our coming in from this time forth and forevermore.',
      'Dispatch warring angels to dismantle every demonic ambush laid against our destinies and ministries.',
    ],
  },
  {
    dayNumber: 16,
    date: 'Tuesday, 27 October 2026',
    dateIso: '2026-10-27',
    dayName: 'Tuesday',
    theme: 'Breaking barrenness and releasing spiritual fruitfulness',
    scriptures: ['John 15:5-8', 'Exodus 23:25-26', 'Colossians 1:9-10'],
    scriptureText: 'By this My Father is glorified, that you bear much fruit; so you will be My disciples.',
    exhortation:
      'Barrenness—whether biological, financial, or spiritual—is contrary to God’s original mandate for mankind to be fruitful and multiply. When believers abide in Christ the True Vine, sap of divine life flows through every branch. Expect supernatural fruitfulness in souls won, projects completed, and destinies fulfilled.',
    prayerDirection:
      'Pray against barrenness of all kinds; release the seed of productivity, marital fruitfulness, and spiritual soul-winning.',
    prayerPoints: [
      'Father, let every form of barrenness and unfruitfulness in my life and lineage wither by the authority of Jesus.',
      'Grant marital breakthroughs, conceptions, and joy to waiting couples across our fellowships and churches.',
      'Make us prolific soul winners; let the fruit of our labor in the Gospel abide unto eternal life.',
      'Lord, breathe upon the works of our hands that they may flourish and glorify Your holy name.',
    ],
  },
  {
    dayNumber: 17,
    date: 'Wednesday, 28 October 2026',
    dateIso: '2026-10-28',
    dayName: 'Wednesday',
    theme: 'Healing the land through humble repentance',
    scriptures: ['2 Chronicles 7:14', 'Nehemiah 1:4-9', 'Joel 2:12-14'],
    scriptureText: 'If My people who are called by My name will humble themselves, and pray and seek My face... then I will heal their land.',
    exhortation:
      'National healing is not initiated by political manifestos or economic summits; it begins when God’s covenant people humble themselves on their knees. Intercessors must stand like Nehemiah, confessing both personal and national sins, appealing to God’s mercy. When the Church repents genuinely, the land experiences supernatural healing and harvest.',
    prayerDirection:
      'Intercede with brokenness for our communities, asking God to forgive bloodshed, idolatry, systemic injustice, and moral decay.',
    prayerPoints: [
      'Lord God of heaven, we bow in sackcloth and ashes for our sins, the sins of our fathers, and the sins of our nation.',
      'Forgive our land for innocent blood shed, idolatry, greed, and spiritual complacency.',
      'Heal our land, Lord! Revive the soil, revive the institutions, and revive the moral conscience of our peoples.',
      'Let rivers of revival flow through every village, town, and mega-city across the African continent and the world.',
    ],
  },
  {
    dayNumber: 18,
    date: 'Thursday, 29 October 2026',
    dateIso: '2026-10-28',
    dayName: 'Thursday',
    theme: 'The peace of Christ over troubled waters',
    scriptures: ['Philippians 4:6-7', 'John 14:27', 'Mark 4:39'],
    scriptureText: 'Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled.',
    exhortation:
      'When storms raged on the Sea of Galilee and seasoned fishermen panicked, Jesus stood up and declared: “Peace, be still!” The same authority resides in Christ today. Whatever crisis is raging in your health, marriage, finances, or community, speak the shalom of God over it today. Christ is your peace.',
    prayerDirection:
      'Command stillness over turbulent situations; release the peace of God that guards hearts and minds.',
    prayerPoints: [
      'Peace of God that surpasses all comprehension, take absolute charge of my thoughts, emotions, and decisions.',
      'We speak “Peace, be still” to every storm threatening our homes, our mental wellbeing, and our assemblies.',
      'Silence the voice of strife, agitation, and panic in our nation’s social and political spheres.',
      'Let Christ be exalted as the Prince of Peace in troubled regions undergoing wars and communal unrest.',
    ],
  },
  {
    dayNumber: 19,
    date: 'Friday, 30 October 2026',
    dateIso: '2026-10-30',
    dayName: 'Friday',
    theme: 'Overcoming by the Blood of the Lamb',
    scriptures: ['Revelation 12:11', '1 Corinthians 15:57', 'Colossians 2:14-15'],
    scriptureText: 'And they overcame him by the blood of the Lamb and by the word of their testimony.',
    exhortation:
      'The cross was not a tragedy; it was the ultimate victory of God over the powers of hell and darkness. By His blood, Jesus disarmed principalities and powers, triumphing over them openly. We do not fight for victory—we fight from victory. Enforce your legal rights in Christ against every stubborn adversary.',
    prayerDirection:
      'Plead the blood of Jesus over every persistent challenge, spiritual battle, and long-standing obstacle in your path.',
    prayerPoints: [
      'By the blood of the Lamb, I overcome every accusation, trap, and assault of the enemy against my life.',
      'Let the blood of Jesus wipe away every handwriting of ordinances and generational curses operating against my lineage.',
      'We enforce the triumph of Calvary over demonic altars and territorial spirits resisting the Gospel in our cities.',
      'Thanks be to God, who always gives us the victory through our Lord and Savior Jesus Christ!',
    ],
  },
  {
    dayNumber: 20,
    date: 'Saturday, 31 October 2026',
    dateIso: '2026-10-31',
    dayName: 'Saturday',
    theme: 'Thanksgiving and celebration of divine faithfulness',
    scriptures: ['Psalm 100:1-5', 'Psalm 103:1-5', '1 Thessalonians 5:16-18'],
    scriptureText: 'Bless the Lord, O my soul, and forget not all His benefits: who forgives all your iniquities, who heals all your diseases.',
    exhortation:
      'As we draw close to the conclusion of this 21-day journey, our hearts must overflow with thanksgiving. Gratitude preserves our miracles and opens doors for greater dimensions of glory. Recount what the Lord has done during these days of fasting, and worship Him for what He is yet to unfold in the months ahead.',
    prayerDirection:
      'Dedicate quality time to praise, adoration, and recounting God’s goodness over your life, church, and nation.',
    prayerPoints: [
      'Father, I bless Your holy name with all my heart; I thank You for granting me grace to seek Your face in this fast.',
      'Thank You for answers to prayers, broken yokes, healed bodies, restored homes, and averted disasters.',
      'We celebrate Your enduring faithfulness over Nations Prayer and Fasting Network and all partner ministries.',
      'May the incense of our thanksgiving ascend as a sweet-smelling savor before Your throne of grace.',
    ],
  },
  {
    dayNumber: 21,
    date: 'Sunday, 1 November 2026',
    dateIso: '2026-11-01',
    dayName: 'Sunday',
    theme: "God's joy — our everlasting strength",
    scriptures: ['Nehemiah 8:10', 'Zephaniah 3:17', 'Psalm 16:11', 'Isaiah 12:2-3'],
    scriptureText: 'Do not sorrow, for the joy of the Lord is your strength. In Your presence is fullness of joy; at Your right hand are pleasures forevermore.',
    exhortation:
      'Glory to God! We reach the grand finale of the 32nd Edition of All Believers 21 Day Fasting and Prayer. You have stood in the gap, and the Lord has heard from heaven. The joy of the Lord is not contingent upon external circumstances; it is an unquenchable spiritual fountain supplied by the Holy Spirit. Step into the new season clothed with power, peace, and everlasting joy in Christ Jesus, the Way Maker!',
    prayerDirection:
      'Enter into high prophetic praise, decreeing that the breakthroughs of this 21-day consecration will speak loudly throughout the coming year.',
    prayerPoints: [
      'Father, I receive the fullness of the joy of the Lord as my perpetual shield, strength, and glory!',
      'I seal every answer, deliverance, and spiritual promotion received during these 21 days with the blood of Jesus.',
      'We declare over NAPFAN, our families, and our nations: the counsel of the Lord shall stand, and the glory of God shall cover the earth as the waters cover the sea.',
      'May the Lord bless you and keep you; may the Lord make His face shine upon you and give you peace forevermore. Amen!',
    ],
  },
];
